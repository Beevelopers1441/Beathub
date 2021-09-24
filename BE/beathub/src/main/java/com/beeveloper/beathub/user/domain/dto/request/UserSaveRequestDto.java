package com.beeveloper.beathub.user.domain.dto.request;

import com.beeveloper.beathub.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserSaveRequestDto {

    private String name;
    private String email;
    private String imageUrl = null;
    private String introduction = null;

    @Builder
    public UserSaveRequestDto(String name, String email, String imageUrl) {
        this.name = name;
        this.email = email;
        this.imageUrl = imageUrl;
    }

    public User toEntity() {
        return User.builder()
                .name(name)
                .email(email)
                .imageUrl(imageUrl)
                .build();
    }
}
