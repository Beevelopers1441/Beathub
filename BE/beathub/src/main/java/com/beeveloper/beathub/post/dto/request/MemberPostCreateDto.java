package com.beeveloper.beathub.post.dto.request;

import io.swagger.annotations.ApiModel;
import lombok.Getter;

@Getter
@ApiModel("개인 구인글 생성 정보")
public class MemberPostCreateReqDto {
    private String title;
    private String content;
    private String tag;
}
