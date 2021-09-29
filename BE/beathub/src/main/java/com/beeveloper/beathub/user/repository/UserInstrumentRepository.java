package com.beeveloper.beathub.user.repository;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.UserInstrument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserInstrumentRepository extends JpaRepository<UserInstrument, Long> {

    UserInstrument findByPlayer(User user);

    List<UserInstrument> findAllByPlayer(User user);

    UserInstrument findByPlayerAndInstrument(User user, Instrument instrument);
}
