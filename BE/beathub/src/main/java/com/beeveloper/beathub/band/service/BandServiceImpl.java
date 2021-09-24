package com.beeveloper.beathub.band.service;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.dto.request.BandCreateDto;
import com.beeveloper.beathub.band.repository.BandRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BandServiceImpl implements BandService{
    private final BandRepository bandRepository;

    @Override
    @Transactional(readOnly = true)
    public Band findById(Long bandId) {
        return bandRepository.findById(bandId).orElseThrow(NullPointerException::new);
    }

    @Override
    public Band createBand(BandCreateDto bandInfo) {
        return new Band();
    }
}
