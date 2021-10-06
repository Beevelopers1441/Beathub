package com.beeveloper.beathub.band.controller;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.dto.request.BandCreateDto;
import com.beeveloper.beathub.band.dto.request.BandInputDto;
import com.beeveloper.beathub.band.dto.ressponse.BandResDto;
import com.beeveloper.beathub.band.service.BandService;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.jwts.JwtService;
import com.beeveloper.beathub.user.service.UserServiceImpl;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;
import java.util.Optional;

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
    public ResponseEntity createBand(
            @RequestHeader(value = "Authorization") String jwtToken,
            @RequestBody BandInputDto bandInfo) {

        if (jwtToken == null) {
            return (ResponseEntity<BandResDto>) ResponseEntity.status(401);
        }

        // jwtToken 분해해서 user 찾고, Leader 로 등록
        Optional<User> searchUser = userService.findByEmail(jwtService.getProperties(jwtToken).get("email"));
        if (!searchUser.isPresent()) {
            return ResponseEntity.badRequest().body("존재하지 않는 회원입니다.");
        }
        User leader = searchUser.get();

        BandCreateDto dto = new BandCreateDto(
                bandInfo.getName(),
                bandInfo.getBandProfileImage(),
                bandInfo.getIntroduction(),
                leader
        );
        Band band = bandService.createBand(dto);

        return ResponseEntity.status(201).body(BandResDto.of(band));
    }

    // 조회

    @ApiOperation(value = "하나의 밴드를 조회합니다. 인자는 Band Id 입니다.")
    @GetMapping("/{bandId}")
    public ResponseEntity find(
            @PathVariable(value = "bandId") Long bandId) {

        Optional<Band> searchBand = bandService.findById(bandId);
        if (!searchBand.isPresent()) {
            return ResponseEntity.badRequest().body("존재하지 않는 밴드입니다.");
        } else {
            Band band = searchBand.get();
            return ResponseEntity.status(201).body(BandResDto.of(band));
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
    @ApiOperation(value = "해당 밴드의 정보를 수정합니다.")
    @PutMapping("/{bandId}")
    public ResponseEntity update(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable(value = "bandId") Long bandId,
            @RequestBody BandInputDto inputDto) {
        // 이미지 처리때문에 보류 중
        Optional<User> searchUser = jwtService.returnUser(jwtToken);
        Optional<Band> searchBand = bandService.findById(bandId);

        if (!searchUser.isPresent()) {
            return ResponseEntity.badRequest().body("회원가입을 해주세요!");
        }
        if (!searchBand.isPresent()) {
            return ResponseEntity.badRequest().body("존재하지 않는 밴드입니다.");
        }

        User user = searchUser.get();
        Band band = searchBand.get();
        if (user.getId() != band.getLeader().getId()) {
            return ResponseEntity.status(403).body("권한이 없는 사용자 입니다.");
        }

        Band updatedBand = bandService.update(band, inputDto);

        return ResponseEntity.status(200).body(BandResDto.of(updatedBand));
    }


    // 삭제
    @ApiOperation(value = "밴드를 삭제합니다")
    @DeleteMapping("/{bandId}")
    public ResponseEntity delete(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathParam(value = "bandId") Long bandId) {

        Optional<User> searchUser = jwtService.returnUser(jwtToken);
        Optional<Band> searchBand = bandService.findById(bandId);

        if (!searchUser.isPresent()) {
            return ResponseEntity.badRequest().body("회원가입을 해주세요!");
        }
        if (!searchBand.isPresent()) {
            return ResponseEntity.badRequest().body("존재하지 않는 밴드입니다.");
        }

        User user = searchUser.get();
        Band band = searchBand.get();

        if (!user.getId().equals(band.getLeader().getId())) {
            return ResponseEntity.status(403).body("권한이 없는 사용자 입니다.");
        }

        bandService.delete(band);
        return ResponseEntity.status(200).build();
    }


}
