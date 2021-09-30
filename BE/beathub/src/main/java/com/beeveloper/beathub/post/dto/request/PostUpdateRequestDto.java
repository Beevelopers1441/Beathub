package com.beeveloper.beathub.post.dto.request;

import com.beeveloper.beathub.post.domain.Post;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class PostUpdateRequestDto {

    private String title;
    private String content;
    private String tag;

    public static PostUpdateRequestDto of(Post post) {
        PostUpdateRequestDto dto = new PostUpdateRequestDto();
        dto.title = post.getTitle();
        dto.content = post.getContent();
        dto.tag = post.getTag().getType();
        return dto;
    }

    public static List<PostUpdateRequestDto> of(List<Post> posts) {
        return posts.stream().map(PostUpdateRequestDto::of).collect(Collectors.toList());
    }
}
