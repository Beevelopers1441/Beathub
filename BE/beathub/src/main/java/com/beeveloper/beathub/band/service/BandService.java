package com.beeveloper.beathub.band.service;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.dto.request.BandCreateDto;

public interface BandService {
    // 단일 밴드 조회
    Band findById(Long bandId);
    // 모든 밴드 조회
    // 밴드 생성
    Band createBand(BandCreateDto bandInfo);
    // 밴드 정보 수정
    // 밴드 삭제
}
