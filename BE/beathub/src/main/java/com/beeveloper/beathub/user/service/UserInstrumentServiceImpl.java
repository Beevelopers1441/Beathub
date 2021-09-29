package com.beeveloper.beathub.user.service;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.UserInstrument;
import com.beeveloper.beathub.user.domain.dto.request.UserInstrumentCreateDto;
import com.beeveloper.beathub.user.domain.dto.response.UserInstrumentResDto;
import com.beeveloper.beathub.user.repository.UserInstrumentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

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
                dto.getInstrument(),
                dto.getPlayer()
        );
        return userInstrumentRepository.save(userInstrument);
    }

    @Override
    public List<UserInstrument> findAllByUser(User user) {
        List<UserInstrument> allByPlayer = userInstrumentRepository.findAllByPlayer(user);
        return allByPlayer;
    }

    @Override
    public UserInstrument findByUserAndInstrument(User user, Instrument instrument) {
        return userInstrumentRepository.findByPlayerAndInstrument(user, instrument);
    }

    @Transactional
    @Override
    public UserInstrument update(UserInstrument findUserInstrument, UserInstrumentResDto dto) {
        return findUserInstrument.update(dto);
    }

    @Override
    public void delete(UserInstrument userInstrument) {
        userInstrumentRepository.delete(userInstrument);
    }

}
