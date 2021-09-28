package com.beeveloper.beathub.user.controller;

import com.beeveloper.beathub.common.dto.FollowDto;
import com.beeveloper.beathub.common.dto.UserInfoDto;
import com.beeveloper.beathub.user.domain.Follow;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.jwts.JwtService;
import com.beeveloper.beathub.user.repository.FollowRepository;
import com.beeveloper.beathub.user.service.FollowService;
import com.beeveloper.beathub.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class FollowController {

    private final FollowRepository followRepository;
    private final FollowService followService;
    private final JwtService jwtService;
    private final UserService userService;

    @PostMapping("/follow/{toUserId}")
    public void followUser(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable Long toUserId) {
        User user = userService.findByEmail(jwtService.getProperties(jwtToken).get("email"));
        Long existFollowId = followService.getFollowIdByFromEmailToId(user.getEmail(), toUserId);
        if (existFollowId == -1) {
            followService.save(userService.findByEmail(jwtService.getProperties(jwtToken).get("email")).getName(), toUserId);
        }
    }

    @DeleteMapping("/follow/{toUserId}")
    public void unFollowUser(
            @RequestHeader(value = "Authorization") String jwtToken,
            @PathVariable Long toUserId
    ) {
        User user = userService.findByEmail(jwtService.getProperties(jwtToken).get("email"));
        Long existFollowId = followService.getFollowIdByFromEmailToId(user.getEmail(), toUserId);
        if (existFollowId != -1) {
            followRepository.deleteById(existFollowId);
        }
    }


    @GetMapping("/follow/{userId}")
    public Map<String, List<FollowDto>> getInfos(
            @PathVariable Long userId
    ) {
        List<Follow> followers = followService.getFollowers(userId);
        List<Follow> followings = followService.getFollowings(userId);


        List<FollowDto> followersDto = FollowDto.ofFollower(followers);
        List<FollowDto> followingDto = FollowDto.ofFollowing(followings);
        Map<String, List<FollowDto>> result = new HashMap<>();
        result.put("followers", followersDto);
        result.put("followings", followingDto);

        return result;
    }
}
