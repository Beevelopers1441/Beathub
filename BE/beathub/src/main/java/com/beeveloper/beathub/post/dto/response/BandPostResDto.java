package com.beeveloper.beathub.post.dto.response;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.post.domain.BandPost;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@ApiModel("밴드 구인글 조회 응답 정보")
public class BandPostResDto {

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

    public BandPostResDto() {}

    public static BandPostResDto of(BandPost bandPost) {
        BandPostResDto bandPostResDto = new BandPostResDto();
        bandPostResDto.id = bandPost.getId();
        bandPostResDto.title = bandPost.getTitle();
        bandPostResDto.content = bandPost.getContent();
        bandPostResDto.isRecruiting = bandPostResDto.isRecruiting();
        bandPostResDto.createTime = bandPostResDto.getCreateTime();
        return bandPostResDto;
    }

    public static List<BandPostResDto> of(List<BandPost> bandPosts) {
        return bandPosts.stream().map(BandPostResDto::of).collect(Collectors.toList());
    }
}
