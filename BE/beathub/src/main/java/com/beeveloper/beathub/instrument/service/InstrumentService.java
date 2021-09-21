package com.beeveloper.beathub.instrument.service;

import com.beeveloper.beathub.instrument.domain.Instrument;

import java.util.List;

public interface InstrumentService {
    Instrument findByType(String typeName);
    List<Instrument> findAllInstruments();
}
