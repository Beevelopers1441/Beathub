package com.beeveloper.beathub.user.domain.dto.response;

import com.beeveloper.beathub.user.domain.Ability;
import com.beeveloper.beathub.user.domain.UserInstrument;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserInstrumentResDto {

    @ApiModelProperty(value = "악기 종류", example = "드럼")
    private String instrument;

    @ApiModelProperty(value = "숙련도", example = "Junior")
    private Ability ability;


    public static UserInstrumentResDto of(UserInstrument userInstrument) {
        UserInstrumentResDto dto = new UserInstrumentResDto();
        dto.ability = userInstrument.getAbility();
        dto.instrument = userInstrument.getInstrument().getType();
        return dto;
    }

}
