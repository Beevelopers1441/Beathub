package com.beeveloper.beathub.user.domain.dto.response;

import com.beeveloper.beathub.user.domain.User;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class UserClassicDto {

    private Long id;
    private String name;
    private String imageUrl;
    private String introduction;

    public static UserClassicDto of(User user) {
        UserClassicDto userClassicDto = new UserClassicDto();
        userClassicDto.id = user.getId();
        userClassicDto.name = user.getName();
        userClassicDto.imageUrl = user.getImageUrl();
        userClassicDto.introduction = user.getIntroduction();

        return userClassicDto;
    }

    public static List<UserClassicDto> of(List<User> users) {
        return users.stream().map(UserClassicDto::of).collect(Collectors.toList());
    }
}
