package com.beeveloper.beathub.user.domain.dto.response;

import com.beeveloper.beathub.user.domain.Ability;
import com.beeveloper.beathub.user.domain.UserInstrument;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserInstrumentResponseDto {

    private String player;

    private String instrument;

    private Ability ability;

    private String model;

    public static UserInstrumentResponseDto of(UserInstrument userInstrument) {
        UserInstrumentResponseDto dto = new UserInstrumentResponseDto();
        dto.ability = userInstrument.getAbility();
        dto.player = userInstrument.getPlayer().getName();
        dto.instrument = userInstrument.getInstrument().getType();
        dto.model = userInstrument.getModel();
        return dto;
    }

}
