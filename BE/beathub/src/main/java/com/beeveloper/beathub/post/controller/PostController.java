package com.beeveloper.beathub.post.controller;

import com.beeveloper.beathub.post.domain.BandPost;
import com.beeveloper.beathub.post.domain.Comment;
import com.beeveloper.beathub.post.domain.MemberPost;
import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.post.dto.request.BandPostCreateDto;
import com.beeveloper.beathub.post.dto.request.CommentCreateDto;
import com.beeveloper.beathub.post.dto.request.MemberPostCreateDto;
import com.beeveloper.beathub.post.dto.response.*;
import com.beeveloper.beathub.post.service.PostService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(value = "게시판 관련 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/posts")
public class PostController {

    private final PostService postService;

    // 생성
    @PostMapping("/members")
    @ApiOperation(value = "개인 구인글 생성", notes = "인증한 사용자를 글쓴이로 하는 구인글 생성")
    public ResponseEntity<MemberPostResDto> createMemberPost(
            @RequestBody @ApiParam(value = "개인 구인글 생성 정보", required = true) MemberPostCreateDto createInfo) {
        MemberPost memberPost = postService.createMemberPost(createInfo);
        return ResponseEntity.status(201).body(MemberPostResDto.of(memberPost));
    }

    @PostMapping("/bands")
    @ApiOperation(value = "밴드 구인글 생성", notes = "인증한 사용자가 선택한 밴드를 글쓴이로 하는 구인글 생성")
    public ResponseEntity<BandPostResDto> createBandPost(
            @RequestBody @ApiParam(value = "밴드 구인글 생성 정보", required = true) BandPostCreateDto createInfo) {
        BandPost bandPost = postService.createBandPost(createInfo);
        return ResponseEntity.status(201).body(BandPostResDto.of(bandPost));
    }

    // 조회
    @GetMapping("/members")
    @ApiOperation(value = "개인 구인글 조회", notes = "개인 구인글을 전체 조회")
    public ResponseEntity<List<MemberPostResDto>> readAllMemberPost() {
        List<MemberPost> memberPosts = postService.findAllMemberPost();
        return ResponseEntity.status(200).body(MemberPostResDto.of(memberPosts));
    }

    @GetMapping("/bands")
    @ApiOperation(value = "밴드 구인글 조회", notes = "밴드 구인글 전체 조회")
    public ResponseEntity<List<BandPostResDto>> readAllBandPost() {
        List<BandPost> bandPosts = postService.findAllBandPost();
        return ResponseEntity.status(200).body(BandPostResDto.of(bandPosts));
    }

    @GetMapping("/members/{postId}")
    @ApiOperation(value = "개인 구인글 상세 조회", notes = "url 경로의 id를 가진 개인 구인글 상세 조회")
    public ResponseEntity<MemberPostResDto> readMemberPost(
            @PathVariable @ApiParam(value = "밴드 구인글 생성 정보", required = true) Long postId) {
        MemberPost memberPost = postService.findMemberPost(postId);
        return ResponseEntity.status(200).body(MemberPostResDto.of(memberPost));
    }

    @GetMapping("/bands/{postId}")
    @ApiOperation(value = "밴드 구인글 상세 조회", notes = "url 경로의 id를 가진 밴드 구인글 상세 조회")
    public ResponseEntity<BandPostResDto> readBandPost(@PathVariable Long postId) {
        BandPost bandPost = postService.findBandPost(postId);
        return ResponseEntity.status(200).body(BandPostResDto.of(bandPost));
    }

    @PostMapping("/posts/{postId}")
    @ApiOperation(value = "댓글 생성", notes = "해당 경로의 글에 달리는 댓글 생성")
    public ResponseEntity<CommentResDto> createComment(
            @PathVariable @ApiParam(value = "글 id") Long postId,
            @RequestBody @ApiParam(value = "댓글 생성 정보", required = true) CommentCreateDto commentInfo) {
        Comment comment = postService.createComment(postId, commentInfo);
        return ResponseEntity.status(201).body(CommentResDto.of(comment));
    }
}
