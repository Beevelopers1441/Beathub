package com.beeveloper.beathub.post.dto.response;

import com.beeveloper.beathub.post.domain.Post;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@ApiModel("개인 구인글 전체 조회 응답 정보")
public class MemberPostSimpleResDto {

    @ApiModelProperty(name="구인글 id", example = "1")
    private Long id;

    @ApiModelProperty(name="구인글 제목", example = "제목입니다.")
    private String title;

    @ApiModelProperty(name="구인글 내용", example = "내용입니다.")
    private String content;

    @ApiModelProperty(name="모집 여부", example = "true")
    private boolean isRecruiting;

    @ApiModelProperty(name="작성 시간", example = "2021-09-15")
    private LocalDateTime createTime;

    public MemberPostSimpleResDto(Post post) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.content = post.getContent();
        this.isRecruiting = post.isRecruiting();
        this.createTime = post.getCreateTime();
    }
}
