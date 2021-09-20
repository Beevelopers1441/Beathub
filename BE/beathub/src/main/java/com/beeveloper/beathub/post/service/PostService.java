package com.beeveloper.beathub.post.service;

import com.beeveloper.beathub.post.dto.request.BandPostCreateDto;
import com.beeveloper.beathub.post.dto.request.MemberPostCreateDto;

public interface PostService {
    void createMemberPost(MemberPostCreateDto requestInfo);
    void createBandPost(BandPostCreateDto requestInfo);
}
