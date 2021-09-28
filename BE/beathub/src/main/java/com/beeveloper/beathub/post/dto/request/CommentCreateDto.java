package com.beeveloper.beathub.post.dto.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@ApiModel("댓글 생성 정보")
public class CommentCreateDto {

    @ApiModelProperty(name="댓글 내용", example = "내용입니다.")
    private String content;

}
