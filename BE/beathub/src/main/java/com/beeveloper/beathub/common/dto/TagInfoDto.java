package com.beeveloper.beathub.common.dto;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.user.domain.UserInstrument;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class TagInfoDto {

    private Long id;
    private String type;

    public static TagInfoDto of(Instrument instrument) {
        TagInfoDto tagInfoDto = new TagInfoDto();
        tagInfoDto.id = instrument.getId();
        tagInfoDto.type = instrument.getType();
        return tagInfoDto;
    }

    public static List<TagInfoDto> of(List<Instrument> instruments) {
        return instruments.stream().map(TagInfoDto::of).collect(Collectors.toList());
    }
}
