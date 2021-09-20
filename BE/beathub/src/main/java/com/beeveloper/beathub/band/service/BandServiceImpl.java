package com.beeveloper.beathub.band.service;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.repository.BandRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BandServiceImpl implements BandService{
    private final BandRepository bandRepository;

    @Override
    public Band findById(Long bandId) {
        return bandRepository.findById(bandId).orElseThrow(NullPointerException::new);
    }
}
