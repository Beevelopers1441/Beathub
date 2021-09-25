package com.beeveloper.beathub.music.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class CommitResDto {

    private Long id;

    private String title;

    private String introduction;

    private LocalDateTime createTime;
}
