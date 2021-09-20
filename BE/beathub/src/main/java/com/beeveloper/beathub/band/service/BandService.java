package com.beeveloper.beathub.band.service;

import com.beeveloper.beathub.band.domain.Band;

public interface BandService {
    Band findById(Long bandId);
}
