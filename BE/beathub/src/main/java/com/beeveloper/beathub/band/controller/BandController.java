package com.beeveloper.beathub.band.controller;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.dto.request.BandCreateDto;
import com.beeveloper.beathub.band.dto.ressponse.BandResDto;
import com.beeveloper.beathub.band.service.BandService;
import com.beeveloper.beathub.common.dto.FollowRequestDto;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.jwts.JwtService;
import com.beeveloper.beathub.user.service.UserServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/bands")
@CrossOrigin(origins = "*")
public class BandController {

    private final BandService bandService;
    private final JwtService jwtService;
    private final UserServiceImpl userService;

    // 밴드명 중복검증
    @ApiOperation(value = "밴드명 중복을 확인하는 함수입니다. 중복이라면 True, 중복이 아니라면 False")
    @GetMapping("/bandname/duplicateCheck/{bandName}")
    public boolean duplicateCheck(@RequestParam(value = "bandName") String bandName) {

        Band findByBandName = bandService.findByName(bandName);
        if (findByBandName == null) {
            return false;
        } else {
            return true;
        }
    }

    //생성
    @ApiOperation(value = "밴드 만드는 API, 해당과정에서 밴드멤버로 자동추가")
    @PostMapping
    public ResponseEntity<BandResDto> createBand(
            @RequestHeader(value = "Authorization") String jwtToken,
            @RequestBody BandInputDto bandInfo) {

        if (jwtToken == null) {
            return (ResponseEntity<BandResDto>) ResponseEntity.status(401);
        }

        // jwtToken 분해해서 user 찾고, Leader 로 등록
        User leader = userService.findByEmail(jwtService.getProperties(jwtToken).get("email"));

        BandCreateDto dto = new BandCreateDto(
                bandInfo.getName(),
                bandInfo.getImageUrl(),
                bandInfo.getIntroduction(),
                leader
        );
        Band band = bandService.createBand(dto);
        return ResponseEntity.status(201).body(BandResDto.of(band));
    }

    // 조회

    @ApiOperation(value = "하나의 밴드를 조회합니다. 인자는 Band Id 입니다. 밴드 멤버를 조회하려면 추가로 BandMember API를 통해 조회해주세요")
    @GetMapping("/{bandId}")
    public ResponseEntity<BandResDto> find(
            @RequestParam(value = "bandId") Long bandId
    ) {
        Band searchBand = bandService.findById(bandId);
        if (searchBand == null) {
            return (ResponseEntity<BandResDto>) ResponseEntity.status(404);
        } else {
            return ResponseEntity.status(201).body(BandResDto.of(searchBand));
        }
    }

    @ApiOperation(value = "모든 밴드를 조회합니다.")
    @GetMapping
    public ResponseEntity<List<BandResDto>> findAll() {
        List<Band> all = bandService.findAll();
        for (Band b : all) {
            System.out.println("b = " + b);
        }
        return ResponseEntity.status(201).body(bandService.changeFromBandToResDto(all));
    }


    // 수정

    // 삭제

    // 팔로우
    @Transactional
    @ApiOperation(value = "밴드를 팔로우 합니다.")
    @PostMapping("/follow")
    public void follow(
            @RequestHeader(value = "Authorization") String jwtToken,
            @RequestBody @ApiParam(value = "팔로우할 Band 의 Id") FollowRequestDto requestDto
    ) {
        User user = userService.findByEmail(jwtService.getProperties(jwtToken).get("email"));
        bandService.follow(user.getId(), requestDto.getId());
    }

    //

}
