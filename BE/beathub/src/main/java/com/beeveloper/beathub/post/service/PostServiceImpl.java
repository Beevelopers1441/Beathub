package com.beeveloper.beathub.post.service;

import com.beeveloper.beathub.band.service.BandService;
import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.post.dto.request.BandPostCreateReqDto;
import com.beeveloper.beathub.post.dto.request.MemberPostCreateReqDto;
import com.beeveloper.beathub.post.repository.CommentRepository;
import com.beeveloper.beathub.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService{

    private final PostRepository postRepository;
    private final CommentRepository commentRepository;
    private final BandService bandService;

    /*
    포스트 멤버, 밴드로 분리(single table strategy)
     */
    @Override
    public Post createMemberPost(MemberPostCreateReqDto requestInfo) {
        Post post = new Post().builder()
                .title(requestInfo.getTitle())
                .content(requestInfo.getContent())
                .createTime(LocalDateTime.now())
//                .authorUser()
                .build();
        return postRepository.save(post);
    }

    @Override
    public Post createBandPost(BandPostCreateReqDto requestInfo) {
//        Band band = bandService.findById(requestInfo.getBandId());
        Post post = new Post().builder()
                .title(requestInfo.getTitle())
                .content(requestInfo.getContent())
                .createTime(LocalDateTime.now())
//                .authorBand(band)
                .build();
        return postRepository.save(post);
    }

    @Override
    public List<Post> findAllMemberPost() {
        List<Post> posts = postRepository.findAll();
        return posts;
    }

    @Override
    public List<Post> findAllBandPost() {
        List<Post> posts = postRepository.findAll();
        return posts;
    }

    /*
    멤버와 밴드 작성글 상속 이용해 분리
     */
    @Override
    public Post findMemberPost(Long postId) {
        return postRepository.findById(postId).orElseThrow(RuntimeException::new);
    }

    @Override
    public Post findBandPost(Long postId) {
        return postRepository.findById(postId).orElseThrow(RuntimeException::new);
    }
}
