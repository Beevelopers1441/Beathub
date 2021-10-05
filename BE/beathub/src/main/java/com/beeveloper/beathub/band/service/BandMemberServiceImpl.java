package com.beeveloper.beathub.band.service;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.domain.BandMember;
import com.beeveloper.beathub.band.domain.Status;
import com.beeveloper.beathub.band.dto.ressponse.BandMemberResDto;
import com.beeveloper.beathub.band.repository.BandMemberRepository;
import com.beeveloper.beathub.band.repository.BandRepository;
import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.instrument.repository.InstrumentRepository;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.UserInstrument;
import com.beeveloper.beathub.user.repository.UserInstrumentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BandMemberServiceImpl implements BandMemberService {

    private final BandRepository bandRepository;
    private final UserInstrumentRepository userInstrumentRepository;
    private final BandMemberRepository bandMemberRepository;
    private final InstrumentRepository instrumentRepository;

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
    public BandMember apply(Long bandId, User user, String instrument) {
        Band band = bandRepository.findById(bandId).orElseThrow(RuntimeException::new);
        Instrument registerInstrument = instrumentRepository.findByType(instrument);
        UserInstrument userInstrument = userInstrumentRepository.findByPlayerAndInstrument(user, registerInstrument);
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
        Optional<Band> band = bandRepository.findById(bandId);
        if (!band.isPresent()) {
            return null;
        }
        Band existBand = band.get();
        return bandMemberRepository.findAllByBandAndStatus(existBand, Status.Waiting);
    }

    @Override
    public void approve(Band band, User user) {
        BandMember searchBandMember = bandMemberRepository.findByBandAndUser(band, user);
        BandMember approvedBandMember = searchBandMember.changeStatusToApproved();
        bandMemberRepository.save(approvedBandMember);
    }


    @Override
    public List<BandMember> getApplies(List<Band> leadingBands) {
        return bandMemberRepository.findAllByStatusAndBandIn(Status.Waiting, leadingBands);
    }

    @Override
    public void delete(BandMember findBandMember) {
        bandMemberRepository.delete(findBandMember);
        return;
    }

}
