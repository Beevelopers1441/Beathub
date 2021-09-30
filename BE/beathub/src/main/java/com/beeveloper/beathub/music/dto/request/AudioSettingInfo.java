package com.beeveloper.beathub.music.dto.request;

import com.beeveloper.beathub.music.domain.AudioSetting;
import com.beeveloper.beathub.music.dto.response.AudioSettingResDto;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@ApiModel("오디오 생성 정보")
@NoArgsConstructor
public class AudioSettingInfo {

    @ApiModelProperty(name = "음향 설정값", example = "90")
    private int high;

    @ApiModelProperty(name = "음향 설정값", example = "80")
    private int mid;

    @ApiModelProperty(name = "음향 설정값", example = "70")
    private int low;

    @ApiModelProperty(name = "볼륨값", example = "60")
    private int volume;

    public AudioSettingInfo(AudioSettingCreateDto audioSettingInfo) {
        this.high = audioSettingInfo.getHigh();
        this.mid = audioSettingInfo.getMid();
        this.low = audioSettingInfo.getLow();
        this.volume = audioSettingInfo.getVolume();
    }
}
