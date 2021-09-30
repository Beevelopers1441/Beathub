package com.beeveloper.beathub.music.dto.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
@ApiModel("오디오 생성 정보")
public class AudioCreateDto {

    @ApiModelProperty(name = "사용자 저장 파일 이름", example = "guitar.mp3")
    private String filename;

    @ApiModelProperty(name = "실제 저장 파일 경로", example = "user/1/guitar.mp3")
    private String filepath;

    @ApiModelProperty(name = "세션 종류", example = "guitar")
    private String instrumentType;
}
