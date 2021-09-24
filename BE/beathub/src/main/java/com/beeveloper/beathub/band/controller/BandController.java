package com.beeveloper.beathub.band.controller;

import com.beeveloper.beathub.band.service.BandService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/bands")
public class BandController {

    private final BandService bandService;

    // 생성

    // 조회

    // 수정

    // 삭제

}
