package com.beeveloper.beathub.band.controller;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.dto.request.BandCreateDto;
import com.beeveloper.beathub.band.dto.ressponse.BandResDto;
import com.beeveloper.beathub.band.service.BandService;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.jwts.JwtService;
import com.beeveloper.beathub.user.service.UserServiceImpl;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @ApiOperation(value = "밴드 만드는 API")
    @PostMapping
    public ResponseEntity<BandResDto> createBand(
                                @RequestHeader(value = "Authorization") String jwtToken,
                                @RequestBody BandInputDto bandInfo) {

        if (jwtToken == null) {
            return (ResponseEntity<BandResDto>) ResponseEntity.status(401);
        }

        // jwtToken 분해해서 user 찾고, Leader 로 등록
        String email = jwtService.getProperties(jwtToken).get("email");
        System.out.println("email = " + bandInfo.getName());
        User leader = userService.findByEmail(jwtService.getProperties(jwtToken).get("email"));

        System.out.println("leader = " + leader);

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

    // 수정

    // 삭제

    // 지원

    //

}
