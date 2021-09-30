package com.beeveloper.beathub.music.dto.request;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
public class AudioSettingCreateDto {

    @ApiModelProperty(name = "음향 설정값", example = "90")
    private int high;

    @ApiModelProperty(name = "음향 설정값", example = "80")
    private int mid;

    @ApiModelProperty(name = "음향 설정값", example = "70")
    private int low;

    @ApiModelProperty(name = "볼륨값", example = "60")
    private int volume;

    @ApiModelProperty(name = "연결할 오디오 id", example = "1")
    private Long audioId;
}
