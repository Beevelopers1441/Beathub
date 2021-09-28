package com.beeveloper.beathub.common.dto;

import com.beeveloper.beathub.music.domain.AudioSetting;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class AudioSettingDto {

    private Long id;
    private int high;
    private int mid;
    private int low;
    private int volume;
    private CommitDto commit;
    private AudioDto audio;

    public static AudioSettingDto of(AudioSetting audioSetting) {
        AudioSettingDto audioSettingDto = new AudioSettingDto();
        audioSettingDto.id = audioSetting.getId();
        audioSettingDto.high = audioSetting.getHigh();
        audioSettingDto.mid = audioSetting.getMid();
        audioSettingDto.low = audioSetting.getLow();
        audioSettingDto.volume = audioSetting.getVolume();
        audioSettingDto.commit = CommitDto.of(audioSetting.getCommit());
        audioSettingDto.audio = AudioDto.of(audioSetting.getAudio());
        return audioSettingDto;
    }

    public static List<AudioSettingDto> of(List<AudioSetting> audioSettings) {
        return audioSettings.stream().map(AudioSettingDto::of).collect(Collectors.toList());
    }
}
