package com.beeveloper.beathub.user.domain.dto.request;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
public class UpdateUserRequestDto {

    @ApiModelProperty(value = "닉네임", example = "바뀐닉네임")
    private String name;

    @ApiModelProperty(value = "이미지파일", example = "아마 S3의 주소가 될듯, 일단 이미지 파일을 넘기는 형식으로")
    private String imageUrl;

    @ApiModelProperty(value = "자신의 소개글", example = "수정된 소개글입니다.")
    private String introduction;



}
