package com.beeveloper.beathub.music.dto.request;

import com.beeveloper.beathub.music.domain.AudioSetting;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@ApiModel("오디오 생성 정보")
@NoArgsConstructor
public class AudioSettingCreateDto {

    @ApiModelProperty(name = "음향 설정값", example = "90")
    private int high;

    @ApiModelProperty(name = "음향 설정값", example = "80")
    private int mid;

    @ApiModelProperty(name = "음향 설정값", example = "70")
    private int low;

    @ApiModelProperty(name = "볼륨값", example = "60")
    private int volume;

}
