package com.beeveloper.beathub.band.service;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.dto.request.BandCreateDto;

import java.util.Optional;

public interface BandService {
    // 단일 밴드 조회
    Optional<Band> findById(Long bandId);
    // 모든 밴드 조회
    // 밴드 생성

    Band findByName(String bandName);
    // 이름으로 조회

    Band createBand(BandCreateDto bandInfo);
    // 밴드 정보 수정
    // 밴드 삭제
}
