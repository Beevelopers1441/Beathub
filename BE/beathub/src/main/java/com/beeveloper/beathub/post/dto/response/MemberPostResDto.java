package com.beeveloper.beathub.post.dto.response;

import com.beeveloper.beathub.post.domain.BandPost;
import com.beeveloper.beathub.post.domain.MemberPost;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@ApiModel("개인 구인글 조회 응답 정보")
public class MemberPostResDto {

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

    public static MemberPostResDto of(MemberPost memberPost) {
        MemberPostResDto memberPostResDto = new MemberPostResDto();
        memberPostResDto.id = memberPost.getId();
        memberPostResDto.title = memberPost.getTitle();
        memberPostResDto.content = memberPost.getContent();
        memberPostResDto.isRecruiting = memberPost.isRecruiting();
        memberPostResDto.createTime = memberPost.getCreateTime();
        return memberPostResDto;
    }

    public static List<MemberPostResDto> of(List<MemberPost> memberPosts) {
        return memberPosts.stream().map(MemberPostResDto::of).collect(Collectors.toList());
    }
}
