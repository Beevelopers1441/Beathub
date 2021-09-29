package com.beeveloper.beathub.music.dto.request;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CommitCreateDto {

    private String title;

    private String introduction;
}
