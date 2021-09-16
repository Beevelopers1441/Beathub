package com.beeveloper.beathub.post.controller;

import com.beeveloper.beathub.post.dto.PostCreateRequestDto;
import com.beeveloper.beathub.post.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/posts")
public class PostController {

    private final PostService postService;

    @PostMapping("/member")
    public ResponseEntity createMemberPost(@RequestBody PostCreateRequestDto createInfo) {
        postService.createMemberPost(createInfo);
        return ResponseEntity.ok(null);
    }

}
