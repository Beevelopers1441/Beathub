package com.beeveloper.beathub.music.controller;

import com.beeveloper.beathub.music.service.MusicService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/music")
@CrossOrigin(origins = "*")
public class MusicController {

    private final MusicService musicService;

    // 버킷 생성 ("/buckets")

    // 버킷 조회

    // 커밋 생성 ("/buckets")

    // 커밋 조회

    // 음원 생성 ("/buckets/{bucketId}/audios")

    // 음원 조회

    // 오디오 세팅 생성 ("/")

    // 오디오 세팅 조회: 커밋 -> 오디오 세팅들
}
