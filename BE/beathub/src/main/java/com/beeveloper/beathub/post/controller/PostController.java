package com.beeveloper.beathub.post.controller;

import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.post.dto.request.MemberPostCreateReqDto;
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
@RequestMapping("api/v1/posts")
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
    public ResponseEntity<List<MemberPostSimpleResDto>> readAllMemberPost() {
        List<Post> post = postService.findAllMemberPost();
        return new
    }

    @GetMapping("/bands")
    public ResponseEntity<List<BandPostSimpleResDto>> readAllBandPost() {
        List<Post> post = postService.findAllBandPost();
        return new
    }

    @GetMapping("/members/{memberId}")
    public ResponseEntity<List<MemberPostResDto>> readMemberPost(@PathVariable Long memberId) {
        List<Post> post = postService.findAllMemberPost();
        return new
    }

    @GetMapping("/bands/{bandId}")
    public ResponseEntity<List<MemberPostResDto>> readBandPost(@PathVariable Long bandId) {
        List<Post> post = postService.findAllMemberPost();
        return new
    }
}
