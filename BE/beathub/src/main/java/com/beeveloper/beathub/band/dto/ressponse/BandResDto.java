package com.beeveloper.beathub.band.dto.ressponse;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.user.domain.User;
import lombok.Getter;

@Getter
public class BandResDto {

    private Long id;

    private String name;

    private String imageUrl;

    private String introduction;

    private String leader;

    public static BandResDto of(Band band) {
        BandResDto dto = new BandResDto();
        dto.id = band.getId();
        dto.name = band.getName();
        dto.imageUrl = band.getImageUrl();
        dto.introduction = band.getIntroduction();
        dto.leader = band.getLeader().getName();
        return dto;
    }

}
