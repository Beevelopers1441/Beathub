package com.beeveloper.beathub.post.dto.request;

import io.swagger.annotations.ApiModel;
import lombok.Getter;

@Getter
@ApiModel("밴드 구인글 생성 정보")
public class BandPostCreateDto {
    private Long bandId;
    private String title;
    private String content;
    private String tag;
}
