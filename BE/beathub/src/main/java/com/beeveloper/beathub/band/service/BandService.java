package com.beeveloper.beathub.band.service;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.dto.request.BandCreateDto;
import com.beeveloper.beathub.band.dto.request.BandInputDto;
import com.beeveloper.beathub.band.dto.ressponse.BandResDto;

import java.util.List;
import java.util.Optional;

public interface BandService {
    // 단일 밴드 조회
    Optional<Band> findById(Long bandId);

    // 모든 밴드 조회
    List<Band> findAll();

    // 밴드 생성

    Band findByName(String bandName);
    // 이름으로 조회

    /**
     * 밴드 생성과 동시에 BandMember를 등록
     *
     * @param bandInfo
     * @return
     */
    Band createBand(BandCreateDto bandInfo);
    // 밴드 정보 수정
    // 밴드 삭제

    List<BandResDto> changeFromBandToResDto(List<Band> bandList);

    void follow(Long userId, Long bandId);

    void unfollow(Long userId, Long bandId);

    void delete(Band band);

    Band update(Band band, BandInputDto inputDto);

    List<Band> findBandsLikeKeyWord(String keyword);
}
