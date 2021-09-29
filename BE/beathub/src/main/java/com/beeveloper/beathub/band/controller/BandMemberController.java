package com.beeveloper.beathub.band.controller;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.domain.BandMember;
import com.beeveloper.beathub.band.dto.ressponse.BandMemberResDto;
import com.beeveloper.beathub.band.service.BandMemberService;
import com.beeveloper.beathub.band.service.BandService;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.jwts.JwtService;
import com.beeveloper.beathub.user.service.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.models.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/api/bandMember")
@RequiredArgsConstructor
@CrossOrigin(value = "*")
public class BandMemberController {

    private final BandMemberService bandMemberService;
    private final BandService bandService;
    private final JwtService jwtService;
    private final UserService userService;

    @Transactional
    @ApiOperation(value = "밴드이름으로 밴드멤버를 조회하는 API입니다")
    @GetMapping("/{bandName}")
    public ResponseEntity<List<BandMemberResDto>> members(
            @RequestParam(value = "bandName") String bandName
    ) {
        List<BandMemberResDto> members = bandMemberService.findMembers(bandName);

        return ResponseEntity.status(201).body(members);
    }

    @ApiOperation(value = "밴드에 가입신청하는 API입니다.")
    @PostMapping("/{bandId}")
    public ResponseEntity<BandMemberResDto> apply(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable(value = "bandId") Long bandId) {

        User findUser = userService.findByEmail(jwtService.getProperties(jwtToken).get("email"));

        if (findUser == null) {
            return (ResponseEntity) ResponseEntity.badRequest();
        } else {
            if (bandMemberService.findMemberInBand(bandId, findUser) != null) {
                return (ResponseEntity<BandMemberResDto>) ResponseEntity.badRequest();}

        }

        BandMember apply = bandMemberService.apply(bandId, findUser);
        return ResponseEntity.status(200).body(BandMemberResDto.of(apply));
    }
}
