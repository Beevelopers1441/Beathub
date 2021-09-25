package com.beeveloper.beathub.user.domain.dto.request;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;


@Getter
public class UserInstrumentInputDto {

    @ApiModelProperty(value = "능력", example = "Master")
    private String ability;

    @ApiModelProperty(value = "악기모델명", example = "fender")
    private String model;

    @ApiModelProperty(value = "악기 종류", example = "어쿠스틱기타")
    private String instrument;
}
