package com.beeveloper.beathub.post.service;

import com.beeveloper.beathub.post.domain.BandPost;
import com.beeveloper.beathub.post.domain.MemberPost;
import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.post.dto.request.BandPostCreateReqDto;
import com.beeveloper.beathub.post.dto.request.MemberPostCreateReqDto;

import java.util.List;

public interface PostService {
    MemberPost createMemberPost(MemberPostCreateReqDto requestInfo);
    BandPost createBandPost(BandPostCreateReqDto requestInfo);
    List<MemberPost> findAllMemberPost();
    List<BandPost> findAllBandPost();
    MemberPost findMemberPost(Long postId);
    BandPost findBandPost(Long postId);
}
