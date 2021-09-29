package com.beeveloper.beathub.user.service;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.UserInstrument;
import com.beeveloper.beathub.user.domain.dto.request.UserInstrumentCreateDto;
import com.beeveloper.beathub.user.domain.dto.response.UserInstrumentResDto;

import java.util.List;

public interface UserInstrumentService {

    Instrument findByUser(User user);

    UserInstrument save(UserInstrumentCreateDto dto);

    List<UserInstrument> findAllByUser(User user);

    UserInstrument findByUserAndInstrument(User user, Instrument instrument);

    UserInstrument update(UserInstrument findUserInstrument, UserInstrumentResDto dto);

    void delete(UserInstrument userInstrument);
}
