package com.beeveloper.beathub.common.dto;

import com.beeveloper.beathub.music.domain.Audio;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class AudioDto {

    private Long id;
    private String filePath;
    private String fileName;
    private InstrumentDto instrument;
    private UserInfoDto uploader;
    private BucketDto bucket;


    public static AudioDto of(Audio audio) {
        AudioDto audioDto = new AudioDto();
        audioDto.id = audio.getId();
        audioDto.filePath = audio.getFilePath();
        audioDto.fileName = audio.getFileName();
        audioDto.instrument = InstrumentDto.of(audio.getInstrument());
        audioDto.uploader = UserInfoDto.ofUser(audio.getUploader());
        audioDto.bucket = BucketDto.of(audio.getBucket());
        return audioDto;
    }

    public static List<AudioDto> of(List<Audio> audios) {
        return audios.stream().map(AudioDto::of).collect(Collectors.toList());
    }

}
