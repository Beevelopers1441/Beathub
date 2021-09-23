package com.beeveloper.beathub.instrument.repository;

import com.beeveloper.beathub.instrument.domain.Instrument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InstrumentRepository  extends JpaRepository<Instrument, Long> {
    Optional<Instrument> findByType(String typeName);
}
