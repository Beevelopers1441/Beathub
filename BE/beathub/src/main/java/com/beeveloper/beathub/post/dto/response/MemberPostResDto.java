package com.beeveloper.beathub.post.dto.response;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class MemberPostResDto {

    private Long id;

    private String title;

    private String content;

    private boolean isRecruiting;

    private LocalDateTime createTime;
}
