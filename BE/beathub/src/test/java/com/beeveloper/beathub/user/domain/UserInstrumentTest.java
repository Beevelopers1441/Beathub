package com.beeveloper.beathub.user.domain;

import com.beeveloper.beathub.instrument.domain.Instrument;
import org.junit.jupiter.api.Test;

import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@Transactional
class UserInstrumentTest {

    @Test
    public void 유저없이만드는_UserInstrument() {

        Instrument instrument = Instrument.builder()
                .type("일렉기타")
                .build();

        UserInstrument userInstrument = UserInstrument.builder()
                .instrument(instrument)
                .build();

        System.out.println("userInstrument = " + userInstrument);

    }
}