package com.beeveloper.beathub.music.dto.request;

import com.beeveloper.beathub.music.domain.AudioSetting;
import com.beeveloper.beathub.music.dto.response.AudioSettingResDto;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class CommitCreateDto {

    private String title;

    private String introduction;

    private List<AudioSettingCreateDto> audioSettingInfos;
}
