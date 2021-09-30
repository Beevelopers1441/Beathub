package com.beeveloper.beathub.music.dto.response;

import com.beeveloper.beathub.common.dto.UserInfoDto;
import com.beeveloper.beathub.music.domain.Audio;
import com.beeveloper.beathub.user.domain.User;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class AudioResDto {

    @ApiModelProperty(name = "AudioSetting Id", example = "1")
    private Long id;

    @ApiModelProperty(name = "사용자 저장 파일 이름", example = "guitar.mp3")
    private String filename;

    @ApiModelProperty(name = "실제 저장 파일 경로", example = "user/1/guitar.mp3")
    private String filepath;

    @ApiModelProperty(name = "세션 종류", example = "guitar")
    private String instrumentType;

    @ApiModelProperty(name = "올린 사람", example = "김철수")
    private UserInfoDto uploader;

    public static AudioResDto of(Audio audio) {
        AudioResDto audioResDto = new AudioResDto();
        audioResDto.id = audio.getId();
        audioResDto.filename = audio.getFileName();
        audioResDto.filepath = audio.getFilePath();
        audioResDto.instrumentType = audio.getInstrument().getType();
        audioResDto.uploader= UserInfoDto.ofUser(audio.getUploader());
        return audioResDto;
    }

    public static List<AudioResDto> of(List<Audio> audios) {
        return audios.stream().map(AudioResDto::of).collect(Collectors.toList());
    }
}
