package com.beeveloper.beathub.post.service;

import com.beeveloper.beathub.post.dto.PostCreateRequestDto;

public interface PostService {
    void createMemberPost(PostCreateRequestDto requestInfo);
}
