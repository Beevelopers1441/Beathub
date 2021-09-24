package com.beeveloper.beathub.post.dto.response;

import com.beeveloper.beathub.post.domain.BandPost;
import com.beeveloper.beathub.post.domain.MemberPost;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class MemberPostResDto {

    private Long id;

    private String title;

    private String content;

    private boolean isRecruiting;

    private LocalDateTime createTime;

    public MemberPostResDto() {}

    public static MemberPostResDto of(MemberPost memberPost) {
        MemberPostResDto memberPostResDto = new MemberPostResDto();
        memberPostResDto.id = memberPost.getId();
        memberPostResDto.title = memberPost.getTitle();
        memberPostResDto.content = memberPost.getContent();
        memberPostResDto.isRecruiting = memberPostResDto.isRecruiting();
        memberPostResDto.createTime = memberPostResDto.getCreateTime();
        return memberPostResDto;
    }

    public static List<MemberPostResDto> of(List<MemberPost> memberPosts) {
        return memberPosts.stream().map(MemberPostResDto::of).collect(Collectors.toList());
    }
}
