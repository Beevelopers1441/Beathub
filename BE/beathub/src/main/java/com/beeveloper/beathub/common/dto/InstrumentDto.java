package com.beeveloper.beathub.common.dto;

import com.beeveloper.beathub.instrument.domain.Instrument;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class InstrumentDto {

    private Long id;
    private String type;

    public static InstrumentDto of(Instrument instrument) {
        InstrumentDto instrumentDto = new InstrumentDto();
        instrumentDto.id = instrument.getId();
        instrumentDto.type = instrument.getType();
        return instrumentDto;
    }

    public static List<InstrumentDto> of(List<Instrument> instruments) {
        return instruments.stream().map(InstrumentDto::of).collect(Collectors.toList());
    }
}
