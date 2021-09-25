package com.beeveloper.beathub.instrument.service;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.instrument.repository.InstrumentRepository;
import io.swagger.models.auth.In;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class InstrumentServiceImpl implements InstrumentService{

    private final InstrumentRepository instrumentRepository;

    @Override
    public Instrument findByType(String typeName) {
        return instrumentRepository.findByType(typeName);
    }

    @Override
    public List<Instrument> findAllInstruments() {
        return instrumentRepository.findAll();
    }


    @PostConstruct
    public void init() {
        Instrument vocal = new Instrument("보컬");
        Instrument keyboard = new Instrument("키보드");
        Instrument electricGuitar = new Instrument("일렉기타");
        Instrument acousticGuitar = new Instrument("어쿠스틱기타");
        Instrument base = new Instrument("베이스");
        Instrument drum = new Instrument("드럼");
        Instrument etc = new Instrument("기타(etc)");

        checkAndSave(vocal);
        checkAndSave(keyboard);
        checkAndSave(electricGuitar);
        checkAndSave(acousticGuitar);
        checkAndSave(base);
        checkAndSave(drum);
        checkAndSave(etc);
    }

    private void checkAndSave(Instrument instrument) {
        Instrument existInstrument = instrumentRepository.findByType(instrument.getType());
        System.out.println("existInstrument = " + existInstrument);
        if (instrumentRepository.findByType(instrument.getType()) == null) {
            System.out.println("instrument = " + instrument);
            instrumentRepository.save(instrument);
        }
    }
}
