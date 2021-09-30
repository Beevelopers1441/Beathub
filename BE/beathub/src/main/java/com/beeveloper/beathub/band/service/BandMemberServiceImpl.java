package com.beeveloper.beathub.band.service;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.domain.BandMember;
import com.beeveloper.beathub.band.domain.Status;
import com.beeveloper.beathub.band.dto.ressponse.BandMemberResDto;
import com.beeveloper.beathub.band.repository.BandMemberRepository;
import com.beeveloper.beathub.band.repository.BandRepository;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.UserInstrument;
import com.beeveloper.beathub.user.repository.UserInstrumentRepository;
import com.sun.xml.bind.v2.util.CollisionCheckStack;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BandMemberServiceImpl implements BandMemberService {

    private final BandRepository bandRepository;
    private final UserInstrumentRepository userInstrumentRepository;
    private final BandMemberRepository bandMemberRepository;

    @Override
    public List<BandMemberResDto> findMembers(String bandName) {
        List<BandMember> members = bandRepository.findByName(bandName).getMembers();

        List<BandMemberResDto> result = new ArrayList<>();
        for (BandMember member : members) {
            BandMemberResDto dto = BandMemberResDto.builder()
                    .bandMember(member)
                    .build();
            result.add(dto);
        }
        return result;
    }

    @Override
    public BandMember apply(Long bandId, User user) {
        Band band = bandRepository.findById(bandId).orElseThrow(RuntimeException::new);
        UserInstrument userInstrument = userInstrumentRepository.findByPlayer(user);
        BandMember bandMember = BandMember.builder()
                .band(band)
                .user(user)
                .instrument(userInstrument.getInstrument())
                .build();
        return bandMemberRepository.save(bandMember);
    }

    @Override
    public BandMember findMemberInBand(Long bandId, User user) {
        Band band = bandRepository.findById(bandId).orElseThrow(RuntimeException::new);
        return bandMemberRepository.findByBandAndUser(band, user);
    }

    @Override
    public List<BandMember> findWatingMember(Long bandId) {
        Band band = bandRepository.findById(bandId).orElseThrow(RuntimeException::new);
        return bandMemberRepository.findAllByBandAndStatus(band, Status.Waiting);
    }
}
