package com.beeveloper.beathub.band.dto.request;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
public class BandInputDto {

    @ApiModelProperty(name = "밴드명", example = "자우림")
    String name;

    @ApiModelProperty(name = "이미지 Url", example = "일단은이미지가 입력으로 들어오고 back에서 처리")
    String imageUrl;

    @ApiModelProperty(name = "밴드소개", example = "저희는 4인조밴드로 ROCK을 위주로합니다!")
    String introduction;
}
