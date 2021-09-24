package com.beeveloper.beathub.band.repository;

import com.beeveloper.beathub.band.domain.Band;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BandRepository extends JpaRepository<Band, Long> {
    Optional<Band> findById(Long bandId);
}
