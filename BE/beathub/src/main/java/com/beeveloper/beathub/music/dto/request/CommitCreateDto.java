package com.beeveloper.beathub.music.dto.request;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CommitCreateDto {
    private Long id;

    private String title;

    private String introduction;
}
