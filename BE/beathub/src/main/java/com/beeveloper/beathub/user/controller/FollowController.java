package com.beeveloper.beathub.user.controller;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.service.BandService;
import com.beeveloper.beathub.common.dto.FollowDto;
import com.beeveloper.beathub.common.dto.FollowRequestDto;
import com.beeveloper.beathub.common.dto.UserInfoDto;
import com.beeveloper.beathub.user.domain.Follow;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.jwts.JwtService;
import com.beeveloper.beathub.user.service.FollowService;
import com.beeveloper.beathub.user.service.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    public void followUser(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable Long toUserId) {
        User fromUser = userService.findByEmail(jwtService.getProperties(jwtToken).get("email"));
        User toUser = userService.findById(toUserId);

        if (fromUser.getId().equals(toUser.getId())) {
            return;
        }

        Follow exist = followService.getFollowByFromUserAndToUser(fromUser.getId(), toUserId);

        // 해당 유저들의 팔로우 유무 파악 후, 없다면 Follow 설정
        if (exist != null) {
            return;
        }
        Follow follow = Follow.builder()
                .fromUser(fromUser)
                .toUser(toUser)
                .build();

        followService.save(follow);
    }


    @ApiOperation(value = "유저에게 UnFollow 를 신청하는 API")
    @DeleteMapping("/unfollow/user/{toUserId}")
    public void unFollowUser(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable Long toUserId
    ) {
        User fromUser = userService.findByEmail(jwtService.getProperties(jwtToken).get("email"));
        User toUser = userService.findById(toUserId);

        if (fromUser.getId().equals(toUser.getId())) {
            return;
        }

        Follow exist = followService.getFollowByFromUserAndToUser(fromUser.getId(), toUserId);

        // UnFollow시에는 있으면 없애고, 없다면 그냥 return
        if (exist == null) {
            return;
        }
        followService.delete(exist);
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
    public ResponseEntity<List<UserInfoDto>> getBandFollowInfo(
            @PathVariable(value = "bandId") Long bandId) {

        Band band = bandService.findById(bandId);
        UserInfoDto.ofUser(band.getFollowers());

        return ResponseEntity.status(200).body(UserInfoDto.ofUser(band.getFollowers()));

    }

    @Transactional
    @ApiOperation(value = "밴드를 Follow 하는 API")
    @PostMapping("/follow/band/{bandId}")
    public void follow(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable(value = "bandId") Long bandId) {

        User user = userService.findByEmail(jwtService.getProperties(jwtToken).get("email"));
        Band band = bandService.findById(bandId);
        if (user.getFollowBands().contains(band)) {
            return;
        }
        bandService.follow(user.getId(), bandId);
    }

    @Transactional
    @ApiOperation(value = "밴드를 UnFollow 하는 API")
    @DeleteMapping("/unfollow/band/{bandId}")
    public void unFollow(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable(value = "bandId") Long bandId) {

        User user = userService.findByEmail(jwtService.getProperties(jwtToken).get("email"));
        Band band = bandService.findById(bandId);
        if (!user.getFollowBands().contains(band)) {
            return;
        }
        bandService.unfollow(user.getId(), bandId);
    }
}
