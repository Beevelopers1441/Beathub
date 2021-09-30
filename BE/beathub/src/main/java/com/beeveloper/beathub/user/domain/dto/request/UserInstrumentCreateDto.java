package com.beeveloper.beathub.user.domain.dto.request;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.user.domain.Ability;
import com.beeveloper.beathub.user.domain.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor
public class UserInstrumentCreateDto {

    @ApiModelProperty(value = "능력", example = "상, 중, 하")
    private Ability ability;

    @ApiModelProperty(value = "악기 종류", example = "기타")
    private Instrument instrument;

    private User player;

    @Builder
    public UserInstrumentCreateDto(
            Ability ability,
            Instrument instrument,
            User player
    ){
        this.ability = ability;
        this.instrument = instrument;
        this.player = player;
    }
}
