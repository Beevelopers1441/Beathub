package com.beeveloper.beathub.common.dto;

import com.beeveloper.beathub.band.domain.Band;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class BandDto {

    private Long id;
    private String name;
    private String imageUrl;

    public static BandDto of(Band band) {
        BandDto bandDto = new BandDto();
        bandDto.id = band.getId();
        bandDto.name = band.getName();
        bandDto.imageUrl = band.getImageUrl();
        return bandDto;
    }

    public static List<BandDto> of(List<Band> bands) {
        return bands.stream().map(BandDto::of).collect(Collectors.toList());
    }
}
