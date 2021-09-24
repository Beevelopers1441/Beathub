package com.beeveloper.beathub.post.dto.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
@ApiModel("개인 구인글 생성 정보")
public class MemberPostCreateDto {

    @ApiModelProperty(name="구인글 제목", example = "제목입니다.")
    private String title;

    @ApiModelProperty(name="구인글 내용", example = "내용입니다.")
    private String content;

    @ApiModelProperty(name="원하는 악기", example = "기타")
    private String tag;
}
