package com.beeveloper.beathub.music.controller;

import com.beeveloper.beathub.music.domain.Audio;
import com.beeveloper.beathub.music.domain.AudioSetting;
import com.beeveloper.beathub.music.domain.Bucket;
import com.beeveloper.beathub.music.domain.Commit;
import com.beeveloper.beathub.music.dto.request.AudioCreateDto;
import com.beeveloper.beathub.music.dto.request.AudioSettingCreateDto;
import com.beeveloper.beathub.music.dto.request.BucketCreateDto;
import com.beeveloper.beathub.music.dto.request.CommitCreateDto;
import com.beeveloper.beathub.music.dto.response.AudioResDto;
import com.beeveloper.beathub.music.dto.response.AudioSettingResDto;
import com.beeveloper.beathub.music.dto.response.BucketResDto;
import com.beeveloper.beathub.music.dto.response.CommitResDto;
import com.beeveloper.beathub.music.service.MusicService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MusicController {

    private final MusicService musicService;

    @PostMapping("/buckets")
    @ApiOperation(value = "버킷 생성")
    public ResponseEntity<BucketResDto> createBucket(
            @RequestHeader(value = "Authorization") String jwtToken,
            @RequestBody @ApiParam(value = "개인 구인글 생성 정보", required = true) BucketCreateDto bucketInfo) {
        Bucket bucket = musicService.createBucket(bucketInfo, jwtToken);
        return ResponseEntity.status(201).body(BucketResDto.of(bucket));
    }
//
//    // 버킷 전체 조회
    @GetMapping("/buckets")
    @ApiOperation(value = "버킷 전체 조회(세부 정보를 얻기 위해선 뒤에 id 달아서)")
    public ResponseEntity<List<BucketResDto>> readAllBuckets() {
        List<Bucket> buckets = musicService.findAllBuckets();
        return ResponseEntity.status(200).body(BucketResDto.of(buckets));
    }

//    @GetMapping("/buckets/{bucketId}")
//    @ApiOperation(value = "버킷 전체 조회(세부 정보를 얻기 위해선 뒤에 id 달아서)")
//    public ResponseEntity<List<BucketResDto>> readAllBuckets(@PathVariable Long bucketId) {
//        List<Bucket> buckets = musicService.findAllBuckets();
//        return ResponseEntity.status(200).body(BucketResDto.of(buckets));
//    }
//
//    // 커밋 생성
//    @PostMapping("/buckets/{bucketId}")
//    public ResponseEntity<CommitResDto> createCommit(
//            @RequestBody CommitCreateDto commitCreateDto, @PathVariable Long bucketId) {
//        Commit commit = musicService.creatCommit(commitCreateDto, bucketId);
//        return ResponseEntity.status(201).body();
//    }
//
//
//    // 버킷의 커밋 조회
//    @GetMapping("/buckets/{bucketId}")
//    public ResponseEntity<List<BucketResDto>> readAllBuckets(@PathVariable Long bucketId) {
//        List<Bucket> buckets = musicService.findAllBuckets();
//        return ResponseEntity.status(200).body();
//    }
//
//    // 음원 생성 ("/buckets/{bucketId}/audios")
//    @PostMapping("/buckets/{bucketId}/audios")
//    public ResponseEntity<AudioResDto> createAudio(@ModelAttribute AudioCreateDto audioInfo, @PathVariable Long bucketId) {
//        Audio audio = musicService.createAudio(audioInfo, bucketId);
//    }
//
//    // 음원 조회
//
//    // 오디오 세팅 생성
//    @PostMapping("/commits/{commitId}/audios/{audioId}")
//    public ResponseEntity<AudioSettingResDto> createAudioSetting(
//            @RequestBody AudioSettingCreateDto audioSettingInfo, @PathVariable Long commitId, @PathVariable Long audioId) {
//        AudioSetting audioSetting = musicService.createAudioSetting(audioSettingInfo, commitId, audioId);
//        return ResponseEntity.status(201).body();
//    }


    // 오디오 세팅 조회: 커밋 -> 오디오 세팅들
}
