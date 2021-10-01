package com.beeveloper.beathub.common.controller;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.service.BandService;
import com.beeveloper.beathub.common.dto.SearchResponseDto;
import com.beeveloper.beathub.music.domain.Audio;
import com.beeveloper.beathub.music.domain.Bucket;
import com.beeveloper.beathub.music.service.MusicService;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.service.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*")
@RequiredArgsConstructor
@RequestMapping("/api/search")
public class SearchController {

    private final UserService userService;
    private final BandService bandService;
    private final MusicService musicService;

    @ApiOperation(value = "검색어로 유저, 밴드, 오디오파일, 버켓 가져오는 곳")
    @GetMapping("/{keyword}")
    public ResponseEntity searchByKeyword(@PathVariable(value = "keyword") String keyword) {

        List<User> users = userService.findUsersLikeKeyword(keyword);
        List<Band> bands = bandService.findBandsLikeKeyWord(keyword);
        List<Audio> audios = musicService.findAudiosLikeKeyword(keyword);
        List<Bucket> buckets = musicService.findBucketsLikeKeyword(keyword);

        return ResponseEntity.status(200).body(SearchResponseDto.of(users, bands, audios, buckets));
    }
}
