package com.beeveloper.beathub.user.controller;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.service.BandService;
import com.beeveloper.beathub.common.dto.FollowDto;
import com.beeveloper.beathub.common.dto.UserInfoDto;
import com.beeveloper.beathub.user.domain.Follow;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.jwts.JwtService;
import com.beeveloper.beathub.user.service.FollowService;
import com.beeveloper.beathub.user.service.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(value = "*")
public class FollowController {

    private final FollowService followService;
    private final JwtService jwtService;
    private final UserService userService;
    private final BandService bandService;


    @ApiOperation(value = "유저에게 Follow 를 신청하는 API")
    @PostMapping("/follow/user/{toUserId}")
    public ResponseEntity followUser(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable Long toUserId) {

        if (jwtToken == null) {
            return ResponseEntity.badRequest().body("로그인을 해주세요");
        }

        Optional<User> searchFromUser = jwtService.returnUser(jwtToken);
        User searchToUser = userService.findById(toUserId);

        if (!searchFromUser.isPresent()) {
            return ResponseEntity.badRequest().body("회원가입을 해주세요");
        }


        User fromUser = searchFromUser.get();
        User toUser = searchToUser;

        if (fromUser.getId().equals(toUser.getId())) {
            return ResponseEntity.badRequest().body("본인은 팔로우할 수 없습니다");
        }

        Follow exist = followService.getFollowByFromUserAndToUser(fromUser.getId(), toUserId);

        // 해당 유저들의 팔로우 유무 파악 후, 없다면 Follow 설정
        if (exist != null) {
            return ResponseEntity.badRequest().body("이미 처리된 요청입니다");
        }
        Follow follow = Follow.builder()
                .fromUser(fromUser)
                .toUser(toUser)
                .build();

        followService.save(follow);
        return ResponseEntity.status(200).build();
    }


    @ApiOperation(value = "유저에게 UnFollow 를 신청하는 API")
    @DeleteMapping("/unfollow/user/{toUserId}")
    public ResponseEntity unFollowUser(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable Long toUserId) {

        if (jwtToken == null) {
            return ResponseEntity.badRequest().body("로그인을 해주세요");
        }

        Optional<User> searchFromUser = jwtService.returnUser(jwtToken);
        User searchToUser = userService.findById(toUserId);

        if (!searchFromUser.isPresent()) {
            return ResponseEntity.badRequest().body("회원가입을 해주세요");
        }


        User fromUser = searchFromUser.get();
        User toUser = searchToUser;

        Follow exist = followService.getFollowByFromUserAndToUser(fromUser.getId(), toUserId);

        // UnFollow시에는 있으면 없애고, 없다면 그냥 return
        if (exist == null) {
            return ResponseEntity.badRequest().body("이미 처리된 요청입니다");
        }
        followService.delete(exist);
        return ResponseEntity.status(200).build();
    }


    @ApiOperation(value = "유저의 Following, Follower 를 조회하는 API")
    @GetMapping("/follow/user/{userId}")
    public Map<String, List<FollowDto>> getUserFollowInfo(
            @PathVariable Long userId) {

        List<Follow> followers = followService.getUserFollowers(userId);
        List<Follow> followings = followService.getUserFollowings(userId);


        List<FollowDto> followersDto = FollowDto.ofFollower(followers);
        List<FollowDto> followingDto = FollowDto.ofFollowing(followings);
        Map<String, List<FollowDto>> result = new HashMap<>();
        result.put("followers", followersDto);
        result.put("followings", followingDto);

        return result;
    }


    // 밴드
    @ApiOperation(value = "밴드의 Follower 를 조회하는 API")
    @GetMapping("/follow/band/{bandId}")
    public ResponseEntity getBandFollowInfo(
            @PathVariable(value = "bandId") Long bandId) {

        Band searchBand = bandService.findById(bandId);
        Band band = searchBand;
        UserInfoDto.ofUser(band.getFollowers());

        return ResponseEntity.status(200).body(UserInfoDto.ofUser(band.getFollowers()));

    }


    @Transactional
    @ApiOperation(value = "밴드를 Follow 하는 API")
    @PostMapping("/follow/band/{bandId}")
    public ResponseEntity follow(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable(value = "bandId") Long bandId) {

        if (jwtToken == null) {
            return ResponseEntity.badRequest().body("로그인을 해주세요");
        }

        Optional<User> searchFromUser = jwtService.returnUser(jwtToken);
        Band searchBand = bandService.findById(bandId);

        if (!searchFromUser.isPresent()) {
            return ResponseEntity.badRequest().body("회원가입을 해주세요");
        }
        User fromUser = searchFromUser.get();
        Band band = searchBand;
        if (fromUser.getFollowBands().contains(band)) {
            return ResponseEntity.badRequest().body("이미 처리된 요청입니다");
        }
        bandService.follow(fromUser.getId(), bandId);
        return ResponseEntity.status(200).build();
    }


    @Transactional
    @ApiOperation(value = "밴드를 UnFollow 하는 API")
    @DeleteMapping("/unfollow/band/{bandId}")
    public ResponseEntity unFollow(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable(value = "bandId") Long bandId) {

        if (jwtToken == null) {
            return ResponseEntity.badRequest().body("로그인을 해주세요");
        }

        Optional<User> searchFromUser = jwtService.returnUser(jwtToken);
        Band searchBand = bandService.findById(bandId);

        if (!searchFromUser.isPresent()) {
            return ResponseEntity.badRequest().body("회원가입을 해주세요");
        }
        User fromUser = searchFromUser.get();
        Band band = searchBand;

        if (!fromUser.getFollowBands().contains(band)) {
            return ResponseEntity.badRequest().body("이미 처리된 요청입니다");
        }
        bandService.unfollow(fromUser.getId(), bandId);
        return ResponseEntity.status(200).build();
    }

}
