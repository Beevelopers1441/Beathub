package com.beeveloper.beathub.instrument.service;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.instrument.repository.InstrumentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class InstrumentServiceImpl implements InstrumentService{

    private final InstrumentRepository instrumentRepository;

    @Override
    public Instrument findByType(String typeName) {
        return instrumentRepository.findByType(typeName).orElseThrow(RuntimeException::new);
    }
}
