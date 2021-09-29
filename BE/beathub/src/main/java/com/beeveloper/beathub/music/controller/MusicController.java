package com.beeveloper.beathub.music.controller;

import com.beeveloper.beathub.music.domain.Audio;
import com.beeveloper.beathub.music.domain.AudioSetting;
import com.beeveloper.beathub.music.domain.Bucket;
import com.beeveloper.beathub.music.domain.Commit;
import com.beeveloper.beathub.music.dto.request.AudioCreateDto;
import com.beeveloper.beathub.music.dto.request.AudioSettingCreateDto;
import com.beeveloper.beathub.music.dto.request.BucketCreateDto;
import com.beeveloper.beathub.music.dto.request.CommitCreateDto;
import com.beeveloper.beathub.music.dto.response.*;
import com.beeveloper.beathub.music.service.MusicService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
