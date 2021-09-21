package com.beeveloper.beathub.instrument.dto;

import com.beeveloper.beathub.instrument.domain.Instrument;
import lombok.Getter;

@Getter
public class InstrumentResDto {
    private Long id;

    private String type;

    public InstrumentResDto(Instrument instrument) {
        this.id = instrument.getId();
        this.type = instrument.getType();
    }
}
