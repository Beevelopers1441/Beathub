package com.beeveloper.beathub.instrument.dto;

import com.beeveloper.beathub.instrument.domain.Instrument;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.parameters.P;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class InstrumentResDto {
    private Long id;

    private String type;

    public InstrumentResDto(Instrument instrument) {
        this.id = instrument.getId();
        this.type = instrument.getType();
    }

    public static InstrumentResDto of (Instrument instrument) {
        return new InstrumentResDto(instrument);
    }

    public static List<InstrumentResDto> of (List<Instrument> instruments) {
        return instruments.stream().map(InstrumentResDto::of).collect(Collectors.toList());
    }
}
