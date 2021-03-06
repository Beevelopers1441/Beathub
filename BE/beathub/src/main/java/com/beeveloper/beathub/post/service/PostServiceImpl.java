package com.beeveloper.beathub.post.service;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.repository.BandRepository;
import com.beeveloper.beathub.band.service.BandService;
import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.instrument.repository.InstrumentRepository;
import com.beeveloper.beathub.post.domain.BandPost;
import com.beeveloper.beathub.post.domain.Comment;
import com.beeveloper.beathub.post.domain.MemberPost;
import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.post.dto.request.*;
import com.beeveloper.beathub.post.exception.NotFoundPost;
import com.beeveloper.beathub.post.repository.BandPostRepository;
import com.beeveloper.beathub.post.repository.CommentRepository;
import com.beeveloper.beathub.post.repository.MemberPostRepository;
import com.beeveloper.beathub.post.repository.PostRepository;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.repository.UserRepository;
import com.beeveloper.beathub.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService{

    private final PostRepository postRepository;
    private final MemberPostRepository memberPostRepository;
    private final BandPostRepository bandPostRepository;
    private final CommentRepository commentRepository;
    private final BandService bandService;
    private final UserRepository userRepository;
    private final BandRepository bandRepository;
    private final InstrumentRepository instrumentRepository;
    private final UserService userService;

    /*
    포스트 멤버, 밴드로 분리(single table strategy)
     */
    @Override
    public MemberPost createMemberPost(MemberPostCreateDto requestInfo) {
        MemberPost memberPost = new MemberPost(
                requestInfo.getTitle(),
                requestInfo.getContent(),
                requestInfo.getUser(), // 실제작성자
                requestInfo.getUser(),
                LocalDateTime.now(),
                requestInfo.getTag()
        );

        return memberPostRepository.save(memberPost);
    }

    @Override
    public BandPost createBandPost(User author, BandPostCreateDto requestInfo) {
        Band band = bandService.findByName(requestInfo.getBand().getName());
        BandPost bandPost = new BandPost(
                requestInfo.getTitle(),
                requestInfo.getContent(),
                LocalDateTime.now(),
                author,
                band,
                requestInfo.getTag());
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
    public Post findById(Long postId) {
        return postRepository.findById(postId).orElseThrow(NotFoundPost::new);
    }

    @Override
    public MemberPost findMemberPost(Long postId) {
        return memberPostRepository.findById(postId).orElseThrow(NotFoundPost::new);
    }

    @Override
    public BandPost findBandPost(Long postId) {
        return bandPostRepository.findById(postId).orElseThrow(NotFoundPost::new);
    }

    @Override
    public Comment createComment(Long userId, Long postId, CommentCreateDto commentInfo) {
        Post post = postRepository.findById(postId).orElseThrow(NotFoundPost::new);
        Optional<User> author = userRepository.findById(userId);
        Comment comment = new Comment().builder()
                .post(post)
                .content(commentInfo.getContent())
                .createTime(LocalDateTime.now())
                .author(author.get())
                .build();
        Comment savedComment = commentRepository.save(comment);
        post.addComments(savedComment);
        return savedComment;
    }

    @Override
    public Post updatePost(Post post, PostUpdateRequestDto dto) {
        Instrument instrument = instrumentRepository.findByType(dto.getTag());
        Post updatePost = post.update(instrument, dto.getTitle(), dto.getContent());
        return postRepository.save(updatePost);
    }

    @Override
    public void delete(Post post) {
        postRepository.delete(post);
    }

    @Override
    public void changeRecruitng(Post post) {
        Post changeRecruiting = post.changeRecruiting();
        postRepository.save(post);
    }
}
