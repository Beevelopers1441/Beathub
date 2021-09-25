package com.beeveloper.beathub.band.repository;

import com.beeveloper.beathub.band.domain.BandMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BandMemberRepository extends JpaRepository<BandMember, Long> {

}
