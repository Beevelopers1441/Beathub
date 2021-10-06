package com.beeveloper.beathub.post.dto.response;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.user.domain.User;
import lombok.Getter;

@Getter
public class SimpleAuthorDto {

    private Long id;
    private String imageUrl;
    private String name;

    public static SimpleAuthorDto of(User user) {
        SimpleAuthorDto dto = new SimpleAuthorDto();
        dto.id = user.getId();
        dto.imageUrl = user.getImageUrl();
        dto.name = user.getName();
        return dto;
    }

    public static SimpleAuthorDto of(Band band) {
        SimpleAuthorDto dto = new SimpleAuthorDto();
        dto.id = band.getId();
        dto.imageUrl = band.getImageUrl();
        dto.name = band.getName();
        return dto;
    }
}
