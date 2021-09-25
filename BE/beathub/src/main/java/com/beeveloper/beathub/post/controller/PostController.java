package com.beeveloper.beathub.post.controller;

import com.beeveloper.beathub.post.domain.BandPost;
import com.beeveloper.beathub.post.domain.MemberPost;
import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.post.dto.request.MemberPostCreateReqDto;
import com.beeveloper.beathub.post.dto.response.BandPostResDto;
import com.beeveloper.beathub.post.dto.response.BandPostSimpleResDto;
import com.beeveloper.beathub.post.dto.response.MemberPostResDto;
import com.beeveloper.beathub.post.dto.response.MemberPostSimpleResDto;
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
@CrossOrigin(origins = "*")
public class PostController {

    private final PostService postService;

    // 생성
    @PostMapping("/members")
    @ApiOperation(value = "개인 구인글 생성", notes = "인증한 사용자를 글쓴이로 하는 구인글 생성")
    public ResponseEntity<BandPostSimpleResDto> createMemberPost(
            @RequestBody @ApiParam(value = "개인 구인글 생성 정보", required = true) MemberPostCreateReqDto createInfo) {
        Post post = postService.createMemberPost(createInfo);
        return ResponseEntity.status(201).body(new BandPostSimpleResDto(post));
    }

    @PostMapping("/bands")
    @ApiOperation(value = "밴드 구인글 생성", notes = "인증한 사용자가 선택한 밴드를 글쓴이로 하는 구인글 생성")
    public ResponseEntity<MemberPostSimpleResDto> createBandPost(
            @RequestBody @ApiParam(value = "밴드 구인글 생성 정보", required = true) MemberPostCreateReqDto createInfo) {
        Post post = postService.createMemberPost(createInfo);
        return ResponseEntity.status(201).body(new MemberPostSimpleResDto(post));
    }

    // 조회
    @GetMapping("/members")
    public ResponseEntity<List<MemberPostResDto>> readAllMemberPost() {
        List<MemberPost> memberPosts = postService.findAllMemberPost();
        return ResponseEntity.status(200).body(MemberPostResDto.of(memberPosts));
    }

    @GetMapping("/bands")
    public ResponseEntity<List<BandPostResDto>> readAllBandPost() {
        List<BandPost> bandPosts = postService.findAllBandPost();
        return ResponseEntity.status(200).body(BandPostResDto.of(bandPosts));
    }

    @GetMapping("/members/{postId}")
    public ResponseEntity<MemberPostResDto> readMemberPost(@PathVariable Long postId) {
        MemberPost memberPost = postService.findMemberPost(postId);
        return ResponseEntity.status(200).body(MemberPostResDto.of(memberPost));
    }

    @GetMapping("/bands/{postId}")
    public ResponseEntity<BandPostResDto> readBandPost(@PathVariable Long postId) {
        BandPost bandPost = postService.findBandPost(postId);
        return ResponseEntity.status(200).body(BandPostResDto.of(bandPost));
    }
}
