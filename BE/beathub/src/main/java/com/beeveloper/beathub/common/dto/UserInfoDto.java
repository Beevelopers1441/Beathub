package com.beeveloper.beathub.common.dto;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.domain.BandMember;
import com.beeveloper.beathub.user.domain.User;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class UserInfoDto {

    private Long id;

    private String name;

    private String imageUrl;

    public static UserInfoDto ofUser(User user) {
        UserInfoDto userInfoDto = new UserInfoDto();
        userInfoDto.id = user.getId();
        userInfoDto.imageUrl = user.getImageUrl();
        userInfoDto.name = user.getName();

        return userInfoDto;
    }

    public static UserInfoDto ofBand(Band band) {
        UserInfoDto userInfoDto = new UserInfoDto();
        userInfoDto.id = band.getId();
        userInfoDto.name = band.getName();
        userInfoDto.imageUrl = band.getImageUrl();

        return userInfoDto;
    }

    public static List<UserInfoDto> ofUser(List<User> users) {
        return users.stream().map(UserInfoDto::ofUser).collect(Collectors.toList());
    }

    public static List<UserInfoDto> ofBand(List<Band> bands) {
        return bands.stream().map(UserInfoDto::ofBand).collect(Collectors.toList());
    }
}
