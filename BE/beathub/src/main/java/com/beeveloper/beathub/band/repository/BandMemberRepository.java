package com.beeveloper.beathub.band.repository;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.domain.BandMember;
import com.beeveloper.beathub.band.domain.Status;
import com.beeveloper.beathub.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BandMemberRepository extends JpaRepository<BandMember, Long> {
    List<BandMember> findByBand(Band band);

    BandMember findByBandAndUser(Band band, User user);

    List<BandMember> findAllByBandAndStatus(Band band, Status status);
}
