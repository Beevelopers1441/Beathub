package com.beeveloper.beathub.user.domain.dto.response;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.user.domain.Ability;
import com.beeveloper.beathub.user.domain.UserInstrument;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class UserInstrumentForUserDto {

    private String ability;
    private String instrument;

    public static UserInstrumentForUserDto of(UserInstrument userInstrument) {
        UserInstrumentForUserDto dto = new UserInstrumentForUserDto();
        dto.ability = userInstrument.getAbility().name();
        dto.instrument = userInstrument.getInstrument().getType();
        return dto;
    }

    public static List<UserInstrumentForUserDto> of(List<UserInstrument> userInstruments) {
        return userInstruments.stream().map(UserInstrumentForUserDto::of).collect(Collectors.toList());
    }


}
