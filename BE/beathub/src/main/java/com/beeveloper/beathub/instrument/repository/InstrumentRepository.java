package com.beeveloper.beathub.instrument.repository;

import com.beeveloper.beathub.instrument.domain.Instrument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstrumentRepository extends JpaRepository<Instrument, Long> {
    Instrument findByType(String type);
}
