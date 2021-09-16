package com.beeveloper.beathub.post.controller;

import com.beeveloper.beathub.post.dto.PostCreateRequestDto;
import com.beeveloper.beathub.post.service.PostService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "게시판 관련 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/posts")
public class PostController {

    private final PostService postService;

    @PostMapping("/member")
    @ApiOperation(value = "개인 구인글 생성", notes = "인증한 사용자를 방장으로 하는 스터디 생성")
    public ResponseEntity createMemberPost(
            @RequestBody @ApiParam(value = "개인 구인글 생성 정보", required = true) PostCreateRequestDto createInfo) {
        postService.createMemberPost(createInfo);
        return ResponseEntity.ok(null);
    }

}
