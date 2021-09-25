package com.beeveloper.beathub.user.repository;

import com.beeveloper.beathub.user.domain.UserInstrument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserInstrumentRepository extends JpaRepository<UserInstrument, Long> {

}
