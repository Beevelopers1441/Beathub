package com.beeveloper.beathub.post.service;

import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.post.dto.request.BandPostCreateReqDto;
import com.beeveloper.beathub.post.dto.request.MemberPostCreateReqDto;

import java.util.List;

public interface PostService {
    Post createMemberPost(MemberPostCreateReqDto requestInfo);
    Post createBandPost(BandPostCreateReqDto requestInfo);
    List<Post> findAllMemberPost();
    List<Post> findAllBandPost();
    Post findMemberPost(Long postId);
    Post findBandPost(Long postId);
}
