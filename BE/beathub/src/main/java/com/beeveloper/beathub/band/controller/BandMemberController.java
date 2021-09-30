package com.beeveloper.beathub.band.controller;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.domain.BandMember;
import com.beeveloper.beathub.band.dto.request.BandMemberRegisterDto;
import com.beeveloper.beathub.band.dto.ressponse.BandMemberResDto;
import com.beeveloper.beathub.band.service.BandMemberService;
import com.beeveloper.beathub.band.service.BandService;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.jwts.JwtService;
import com.beeveloper.beathub.user.service.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bandMember")
@RequiredArgsConstructor
@CrossOrigin(value = "*")
public class BandMemberController {

    private final BandMemberService bandMemberService;
    private final BandService bandService;
    private final JwtService jwtService;
    private final UserService userService;


    @ApiOperation(value = "밴드에 가입신청하는 API입니다.")
    @PostMapping("/{bandId}")
    public ResponseEntity apply(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable(value = "bandId") Long bandId) {

        Optional<User> searchUser = jwtService.returnUser(jwtToken);
        if (!searchUser.isPresent()) {
            return ResponseEntity.badRequest().body("회원가입을 해주세요!");
        }
        User findUser = searchUser.get();

        if (findUser == null) {
            return ResponseEntity.status(403).build();
        } else {
            if (bandMemberService.findMemberInBand(bandId, findUser) != null) {
                return ResponseEntity.badRequest().body("이미 처리된 요청입니다!");
            }
        }

        BandMember apply = bandMemberService.apply(bandId, findUser);
        return ResponseEntity.status(200).body(BandMemberResDto.of(apply));
    }


    @ApiOperation(value = "밴드에 가입신청한 User를 반환해주는 API")
    @GetMapping("/waiting/{bandId}")
    public ResponseEntity getWaitingMembers(
            @PathVariable(value = "bandId") Long bandId) {

        Optional<Band> searchBand = bandService.findById(bandId);

        if (!searchBand.isPresent()) {
            return ResponseEntity.badRequest().body("존재하지 않는 밴드입니다.");
        }

        List<BandMember> watingMember = bandMemberService.findWatingMember(bandId);

        return ResponseEntity.status(200).body(BandMemberResDto.of(watingMember));
    }


    @Transactional
    @ApiOperation(value = "밴드 가입신청을 승인하는 API")
    @PostMapping("/approve")
    public void approveBandMember(
            @RequestHeader(value = "Authorization") String jwtToken,
            @RequestBody @ApiParam BandMemberRegisterDto dto) {

        // 예외 처리, 존재 유무 확인 후, 리더의 Id와 요청한 사람의 Id 가 동일한지 확인
        Optional<User> leader = jwtService.returnUser(jwtToken);

        Optional<User> requestUser = userService.findById(dto.getUserId());
        Optional<Band> searchBand = bandService.findById(dto.getBandId());
        if (!leader.isPresent() || !requestUser.isPresent() || !searchBand.isPresent()) {
            return;
        }
        User leaderUser = leader.get();
        User user = requestUser.get();
        Band band = searchBand.get();

        if (leaderUser.getId() != band.getLeader().getId()) {
            return;
        }

        bandMemberService.approve(band, user);
    }

    @Transactional
    @ApiOperation(value = "밴드 가입신청을 거절하는 API")
    @PostMapping("/deny")
    public void denyBandMember(
            @RequestHeader(value = "Authorization") String jwtToken,
            @RequestBody @ApiParam BandMemberRegisterDto dto) {

        // 예외 처리, 존재 유무 확인 후, 리더의 Id와 요청한 사람의 Id 가 동일한지 확인
        Optional<User> leader = jwtService.returnUser(jwtToken);

        Optional<User> requestUser = userService.findById(dto.getUserId());
        Optional<Band> searchBand = bandService.findById(dto.getBandId());
        if (!leader.isPresent() || !requestUser.isPresent() || !searchBand.isPresent()) {
            return;
        }
        User leaderUser = leader.get();
        User user = requestUser.get();
        Band band = searchBand.get();

        if (!leaderUser.getId().equals(band.getLeader().getId())) {
            return;
        }

        bandMemberService.deny(band, user);
    }
}
