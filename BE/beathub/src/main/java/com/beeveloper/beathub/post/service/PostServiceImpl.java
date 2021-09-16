package com.beeveloper.beathub.post.service;

import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.post.dto.PostCreateRequestDto;
import com.beeveloper.beathub.post.repository.CommentRepository;
import com.beeveloper.beathub.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService{

    private final PostRepository postRepository;
    private final CommentRepository commentRepository;

    @Override
    public void createMemberPost(PostCreateRequestDto requestInfo) {
        Post post = new Post(requestInfo);
    }
}
