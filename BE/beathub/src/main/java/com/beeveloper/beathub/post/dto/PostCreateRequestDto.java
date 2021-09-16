package com.beeveloper.beathub.post.dto;

import lombok.Getter;

@Getter
public class PostCreateRequestDto {
    private String title;
    private String content;
    private String tag;
}
