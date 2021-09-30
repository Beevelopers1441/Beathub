package com.beeveloper.beathub.music.dto.response;

import com.beeveloper.beathub.music.domain.Audio;
import com.beeveloper.beathub.music.domain.AudioSetting;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class AudioSettingResDto {

    @ApiModelProperty(name = "AudioSetting Id", example = "1")
    private Long id;

    @ApiModelProperty(name = "음향 설정값", example = "90")
    private int high;

    @ApiModelProperty(name = "음향 설정값", example = "80")
    private int mid;

    @ApiModelProperty(name = "음향 설정값", example = "70")
    private int low;

    @ApiModelProperty(name = "볼륨값", example = "60")
    private int volume;

    private AudioResDto audioResDto;

    public static AudioSettingResDto of(AudioSetting audioSetting) {
        AudioSettingResDto audioSettingResDto = new AudioSettingResDto();
        audioSettingResDto.high = audioSetting.getHigh();
        audioSettingResDto.mid = audioSettingResDto.getMid();
        audioSettingResDto.low = audioSettingResDto.getLow();
        audioSettingResDto.volume = audioSettingResDto.getVolume();
        audioSettingResDto.audioResDto = AudioResDto.of(audioSetting.getAudio());
        return audioSettingResDto;
    }

    public static List<AudioSettingResDto> of(List<AudioSetting> audioSettings) {
        return audioSettings.stream().map(AudioSettingResDto::of).collect(Collectors.toList());
    }
}
