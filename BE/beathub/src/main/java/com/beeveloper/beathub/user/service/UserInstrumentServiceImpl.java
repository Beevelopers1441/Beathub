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
        UserInstrument userInstrument = UserInstrument.builder()
                .ability(dto.getAbility())
                .model(dto.getModel())
                .instrument(dto.getInstrument())
                .player(dto.getPlayer())
                .build();
        return userInstrumentRepository.save(userInstrument);
    }
}
