package com.beeveloper.beathub.band.controller;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.dto.request.BandCreateDto;
import com.beeveloper.beathub.band.dto.ressponse.BandResDto;
import com.beeveloper.beathub.band.service.BandService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/bands")
public class BandController {

    private final BandService bandService;

    // 생성
//    @PostMapping("")
//    public ResponseEntity<BandResDto> createBand(@RequestBody BandCreateDto bandInfo) {
//        Band band = bandService.createBand(bandInfo);
//        return ResponseEntity.status(201).body()
//    }

    // 조회

    // 수정

    // 삭제

    // 지원

    //

}
