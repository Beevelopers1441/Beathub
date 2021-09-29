package com.beeveloper.beathub.band.service;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.domain.BandMember;
import com.beeveloper.beathub.band.dto.request.BandCreateDto;
import com.beeveloper.beathub.band.dto.ressponse.BandResDto;
import com.beeveloper.beathub.band.repository.BandMemberRepository;
import com.beeveloper.beathub.band.repository.BandRepository;
import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.instrument.repository.InstrumentRepository;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.UserInstrument;
import com.beeveloper.beathub.user.repository.UserInstrumentRepository;
import com.beeveloper.beathub.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BandServiceImpl implements BandService{
    private final BandRepository bandRepository;
    private final BandMemberRepository bandMemberRepository;
    private final UserInstrumentRepository userInstrumentRepository;
    private final UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public Band findById(Long bandId) {
        return bandRepository.findById(bandId).orElseThrow(RuntimeException::new);
    }

    @Override
    public List<Band> findAll() {
        return bandRepository.findAll();
    }

    @Override
    public Band findByName(String bandName) {
        return bandRepository.findByName(bandName);
    }

    /**
     * 처음 밴드만들때
     * 리더등록하고, 리더또한 밴드멤버로 등록
     * @param bandInfo
     * @return
     */
    @Override
    public Band createBand(BandCreateDto bandInfo) {
        Band band = new Band(
                bandInfo.getName(),
                bandInfo.getImageUrl(),
                bandInfo.getIntroduction(),
                bandInfo.getLeader(),
                bandInfo.getCreateTime()
        );

        // BandMember 등록용, Leader 용
        User leader = bandInfo.getLeader();
        Instrument instrument = userInstrumentRepository.findByPlayer(leader).getInstrument();

        Band savedBand = bandRepository.save(band);

        BandMember bandMember = BandMember.createBandMemberForLeader(
                leader,
                savedBand,
                instrument);

        bandMemberRepository.save(bandMember);

        return savedBand;
    }

    @Override
    public List<BandResDto> changeFromBandToResDto(List<Band> bands) {
        List<BandResDto> result = new ArrayList<>();

        for (Band band : bands) {
            result.add(BandResDto.of(band));
        }
        return result;
    }

    @Override
    public void follow(Long userId, Long bandId) {
        User user = userRepository.findById(userId).orElseThrow(RuntimeException::new);
        Band band = bandRepository.findById(bandId).orElseThrow(RuntimeException::new);
        user.addFollowingBand(band);
    }

    @Override
    public void unfollow(Long userId, Long bandId) {
        User user = userRepository.findById(userId).orElseThrow(RuntimeException::new);
        Band band = bandRepository.findById(bandId).orElseThrow(RuntimeException::new);
        user.removeFollowingBand(band);
    }
}
