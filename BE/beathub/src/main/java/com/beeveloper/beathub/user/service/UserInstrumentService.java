package com.beeveloper.beathub.user.service;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.UserInstrument;
import com.beeveloper.beathub.user.domain.dto.request.UserInstrumentCreateDto;

public interface UserInstrumentService {

    Instrument findByUser(User user);

    UserInstrument save(UserInstrumentCreateDto dto);
}
