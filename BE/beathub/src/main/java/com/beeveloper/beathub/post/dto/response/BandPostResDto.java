package com.beeveloper.beathub.post.dto.response;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.post.domain.BandPost;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class BandPostResDto {
    private Long id;

    private String title;

    private String content;

    private boolean isRecruiting;

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
