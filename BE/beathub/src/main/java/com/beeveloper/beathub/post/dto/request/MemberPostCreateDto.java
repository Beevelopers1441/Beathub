package com.beeveloper.beathub.post.dto;

import io.swagger.annotations.ApiModel;
import lombok.Getter;

@Getter
@ApiModel("생성 정보")
public class PostCreateRequestDto {
    private String title;
    private String content;
    private String tag;
}
