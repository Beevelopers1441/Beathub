package com.beeveloper.beathub.common.dto;

import com.beeveloper.beathub.user.domain.Follow;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class FollowDto {

    UserInfoDto user;

    public static FollowDto ofFollowing(Follow follow) {
        FollowDto followDto = new FollowDto();
        followDto.user = UserInfoDto.ofUser(follow.getToUser());
        return followDto;
    }

    public static List<FollowDto> ofFollowing(List<Follow> follows) {
        return follows.stream().map(FollowDto::ofFollowing).collect(Collectors.toList());
    }

    public static FollowDto ofFollower(Follow follow) {
        FollowDto followDto = new FollowDto();
        followDto.user = UserInfoDto.ofUser(follow.getFromUser());
        return followDto;
    }

    public static List<FollowDto> ofFollower(List<Follow> follows) {
        return follows.stream().map(FollowDto::ofFollower).collect(Collectors.toList());
    }
}
