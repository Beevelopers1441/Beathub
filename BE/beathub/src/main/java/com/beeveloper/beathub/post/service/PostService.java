package com.beeveloper.beathub.post.service;

import com.beeveloper.beathub.post.domain.BandPost;
import com.beeveloper.beathub.post.domain.Comment;
import com.beeveloper.beathub.post.domain.MemberPost;
import com.beeveloper.beathub.post.dto.request.BandPostCreateDto;
import com.beeveloper.beathub.post.dto.request.CommentCreateDto;
import com.beeveloper.beathub.post.dto.request.MemberPostCreateDto;

import java.util.List;

public interface PostService {
    MemberPost createMemberPost(MemberPostCreateDto requestInfo);
    BandPost createBandPost(BandPostCreateDto requestInfo);
    List<MemberPost> findAllMemberPost();
    List<BandPost> findAllBandPost();
    MemberPost findMemberPost(Long postId);
    BandPost findBandPost(Long postId);
    Comment createComment(Long postId, CommentCreateDto commentInfo);
}
