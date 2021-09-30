package com.beeveloper.beathub.common.dto;

import com.beeveloper.beathub.user.domain.Ability;
import com.beeveloper.beathub.user.domain.UserInstrument;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class UserInstrumentDto {

    private Long id;
//    private String model;
    private Ability ability;
    private UserInfoDto player;
    private InstrumentDto instrument;

    public static UserInstrumentDto of(UserInstrument userInstrument) {
        UserInstrumentDto userInstrumentDto = new UserInstrumentDto();
        userInstrumentDto.id = userInstrument.getId();
//        userInstrumentDto.model = userInstrument.getModel();
        userInstrumentDto.ability = userInstrument.getAbility();
        userInstrumentDto.player = UserInfoDto.ofUser(userInstrument.getPlayer());
        userInstrumentDto.instrument = InstrumentDto.of(userInstrument.getInstrument());
        return userInstrumentDto;
    }

    public static List<UserInstrumentDto> of(List<UserInstrument> userInstruments) {
        return userInstruments.stream().map(UserInstrumentDto::of).collect(Collectors.toList());
    }

}
