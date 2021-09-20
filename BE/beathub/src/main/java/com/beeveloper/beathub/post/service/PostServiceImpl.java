package com.beeveloper.beathub.post.service;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.service.BandService;
import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.post.dto.request.BandPostCreateDto;
import com.beeveloper.beathub.post.dto.request.MemberPostCreateDto;
import com.beeveloper.beathub.post.repository.CommentRepository;
import com.beeveloper.beathub.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService{

    private final PostRepository postRepository;
    private final CommentRepository commentRepository;
    private final BandService bandService;

    @Override
    public void createMemberPost(MemberPostCreateDto requestInfo) {
        Post post = new Post().builder()
                .title(requestInfo.getTitle())
                .content(requestInfo.getContent())
                .createTime(LocalDateTime.now())
//                .authorUser()
                .build();
        postRepository.save(post);
    }

    @Override
    public void createBandPost(BandPostCreateDto requestInfo) {
//        Band band = bandService.findById(requestInfo.getBandId());
        Post post = new Post().builder()
                .title(requestInfo.getTitle())
                .content(requestInfo.getContent())
                .createTime(LocalDateTime.now())
//                .authorBand(band)
                .build();
        postRepository.save(post);
    }
}
