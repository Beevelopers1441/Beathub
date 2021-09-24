package com.beeveloper.beathub.post.service;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.service.BandService;
import com.beeveloper.beathub.post.domain.BandPost;
import com.beeveloper.beathub.post.domain.Comment;
import com.beeveloper.beathub.post.domain.MemberPost;
import com.beeveloper.beathub.post.dto.request.BandPostCreateDto;
import com.beeveloper.beathub.post.dto.request.CommentCreateDto;
import com.beeveloper.beathub.post.dto.request.MemberPostCreateDto;
import com.beeveloper.beathub.post.repository.BandPostRepository;
import com.beeveloper.beathub.post.repository.CommentRepository;
import com.beeveloper.beathub.post.repository.MemberPostRepository;
import com.beeveloper.beathub.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService{

    private final PostRepository postRepository;
    private final MemberPostRepository memberPostRepository;
    private final BandPostRepository bandPostRepository;
    private final CommentRepository commentRepository;
    private final BandService bandService;

    /*
    포스트 멤버, 밴드로 분리(single table strategy)
     */
    @Override
    public MemberPost createMemberPost(MemberPostCreateDto requestInfo) {
        MemberPost memberPost = new MemberPost().builder()
                .title(requestInfo.getTitle())
                .content(requestInfo.getContent())
                .createTime(LocalDateTime.now())
//                .authorUser()
                .build();
        return memberPostRepository.save(memberPost);
    }

    @Override
    public BandPost createBandPost(BandPostCreateDto requestInfo) {
        Band band = bandService.findById(requestInfo.getBandId());
        BandPost bandPost = new BandPost().builder()
                .title(requestInfo.getTitle())
                .content(requestInfo.getContent())
                .createTime(LocalDateTime.now())
                .authorBand(band)
                .build();
        return bandPostRepository.save(bandPost);
    }

    @Override
    public List<MemberPost> findAllMemberPost() {
        List<MemberPost> memberPosts = memberPostRepository.findAll();
        return memberPosts;
    }

    @Override
    public List<BandPost> findAllBandPost() {
        List<BandPost> bandPosts = bandPostRepository.findAll();
        return bandPosts;
    }

    /*
    멤버와 밴드 작성글 상속 이용해 분리
     */
    @Override
    public MemberPost findMemberPost(Long postId) {
        return memberPostRepository.findById(postId).orElseThrow(RuntimeException::new);
    }

    @Override
    public BandPost findBandPost(Long postId) {
        return bandPostRepository.findById(postId).orElseThrow(RuntimeException::new);
    }

    @Override
    public Comment createComment(Long postId, CommentCreateDto commentInfo) {
        Comment comment = new Comment().builder()
                .content(commentInfo.getContent())
                .createTime(LocalDateTime.now())
//                .author()
                .build();
        return commentRepository.save(comment);
    }
}
