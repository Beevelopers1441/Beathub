package com.beeveloper.beathub.user.service;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.UserInstrument;
import com.beeveloper.beathub.user.domain.dto.request.UserInstrumentCreateDto;
import com.beeveloper.beathub.user.repository.UserInstrumentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserInstrumentServiceImpl implements UserInstrumentService {

    private final UserInstrumentRepository userInstrumentRepository;

    @Override
    public Instrument findByUser(User user) {

        return null;
    }

    @Override
    public UserInstrument save(UserInstrumentCreateDto dto) {
        UserInstrument userInstrument = new UserInstrument(
                dto.getAbility(),
                dto.getModel(),
                dto.getInstrument(),
                dto.getPlayer()
        );
        return userInstrumentRepository.save(userInstrument);
    }
}
