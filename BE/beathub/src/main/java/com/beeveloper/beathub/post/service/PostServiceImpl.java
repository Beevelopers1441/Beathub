package com.beeveloper.beathub.post.service;

import com.beeveloper.beathub.post.repository.CommentRepository;
import com.beeveloper.beathub.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService{

    private final PostRepository postRepository;
    private final CommentRepository commentRepository;
}
