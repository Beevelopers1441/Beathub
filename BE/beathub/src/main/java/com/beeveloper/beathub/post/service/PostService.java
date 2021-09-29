package com.beeveloper.beathub.post.service;

import com.beeveloper.beathub.post.domain.BandPost;
import com.beeveloper.beathub.post.domain.Comment;
import com.beeveloper.beathub.post.domain.MemberPost;
import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.post.dto.request.*;
import com.beeveloper.beathub.user.domain.User;

import java.util.List;

public interface PostService {
    MemberPost createMemberPost(MemberPostCreateDto requestInfo);
    BandPost createBandPost(User author, BandPostCreateDto requestInfo);
    List<MemberPost> findAllMemberPost();
    List<BandPost> findAllBandPost();
    MemberPost findMemberPost(Long postId);
    BandPost findBandPost(Long postId);
    Post findById(Long postId);
    Comment createComment(Long userId, Long postId, CommentCreateDto commentInfo);
    Post updatePost(Post post, PostUpdateRequestDto dto);
}
