package com.beeveloper.beathub.music.dto.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
@ApiModel("버킷 생성 정보")
public class BucketCreateDto {

    @ApiModelProperty(name = "버킷 이름", example = "제목이요~")
    private String title;

    @ApiModelProperty(name = "BPM", example = "120")
    private int BPM;

    @ApiModelProperty(name = "버킷 설명", example = "설명이요~")
    private String introduction;

}
