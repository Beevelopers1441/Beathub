package com.beeveloper.beathub.band.dto.request;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
public class BandMemberApplyDto {

    @ApiModelProperty(value = "해당 유저가 어떤 악기로 신청을 했는지 String 값으로 입력해주세요")
    private String instrument;
}
