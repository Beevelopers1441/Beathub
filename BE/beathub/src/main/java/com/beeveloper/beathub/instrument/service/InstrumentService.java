package com.beeveloper.beathub.instrument.service;

import com.beeveloper.beathub.instrument.domain.Instrument;

public interface InstrumentService {
    Instrument findByType(String typeName);
}
