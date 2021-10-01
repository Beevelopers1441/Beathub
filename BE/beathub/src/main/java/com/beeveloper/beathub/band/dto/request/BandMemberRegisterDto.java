package com.beeveloper.beathub.band.dto.request;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
public class BandMemberRegisterDto {

    @ApiModelProperty(value = "요청 처리하는 Band의 Id 값", example = "1")
    private Long bandId;

    @ApiModelProperty(value = "요청했던 User의 Id 값", example = "2")
    private Long userId;
}
