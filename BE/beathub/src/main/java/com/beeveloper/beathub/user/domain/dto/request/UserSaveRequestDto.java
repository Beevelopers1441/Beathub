package com.beeveloper.beathub.user.domain.dto.request;

import com.beeveloper.beathub.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserSaveRequestDto {

    private String name;
    private String email;
    private String imageUrl = null;
    private String introduction = null;


    public UserSaveRequestDto(String name, String email, String imageUrl) {
        this.name = name;
        this.email = email;
        this.imageUrl = imageUrl;
    }

    public static User toEntity(UserSaveRequestDto dto) {
        User user = new User(
                dto.getName(),
                dto.getImageUrl(),
                dto.getEmail()
        );
        return user;
    }
}
