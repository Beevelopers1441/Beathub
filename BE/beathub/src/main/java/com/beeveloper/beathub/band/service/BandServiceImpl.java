package com.beeveloper.beathub.band.service;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.domain.BandMember;
import com.beeveloper.beathub.band.dto.request.BandCreateDto;
import com.beeveloper.beathub.band.dto.request.BandInputDto;
import com.beeveloper.beathub.band.dto.ressponse.BandResDto;
import com.beeveloper.beathub.band.exception.NotFoundBand;
import com.beeveloper.beathub.band.repository.BandMemberRepository;
import com.beeveloper.beathub.band.repository.BandRepository;
import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.instrument.repository.InstrumentRepository;
import com.beeveloper.beathub.user.domain.Ability;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.UserInstrument;
import com.beeveloper.beathub.user.exception.NotFoundUser;
import com.beeveloper.beathub.user.repository.UserInstrumentRepository;
import com.beeveloper.beathub.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BandServiceImpl implements BandService{
    private final BandRepository bandRepository;
    private final BandMemberRepository bandMemberRepository;
    private final UserInstrumentRepository userInstrumentRepository;
    private final UserRepository userRepository;
    private final InstrumentRepository instrumentRepository;

    @Override
    @Transactional(readOnly = true)
    public Band findById(Long bandId) {
        return bandRepository.findById(bandId).orElseThrow(NotFoundBand::new);
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
     * @param inputType
     * @return
     */
    @Override
    public Band createBand(BandCreateDto bandInfo, String inputType) {
        Band band = new Band(
                bandInfo.getName(),
                bandInfo.getImageUrl(),
                bandInfo.getIntroduction(),
                bandInfo.getLeader(),
                bandInfo.getCreateTime()
        );

        // BandMember 등록용, Leader 용, UserInstrument에도 추가
        User leader = bandInfo.getLeader();
        Instrument instrument = instrumentRepository.findByType(inputType);

        UserInstrument userInstrument = UserInstrument.builder()
                .instrument(instrument)
                .ability(Ability.Senior)
                .player(leader)
                .build();
        userInstrumentRepository.save(userInstrument);
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
        User user = userRepository.findById(userId).orElseThrow(NotFoundUser::new);
        Band band = findById(bandId);
        user.addFollowingBand(band);
    }

    @Override
    public void unfollow(Long userId, Long bandId) {
        User user = userRepository.findById(userId).orElseThrow(NotFoundUser::new);
        Band band = findById(bandId);
        user.removeFollowingBand(band);
    }

    @Override
    public void delete(Band band) {
        bandRepository.delete(band);
    }

    @Override
    public Band update(Band band, BandInputDto inputDto) {
        Band updateBand = band.update(inputDto);
        return bandRepository.save(updateBand);
    }

    @Override
    public List<Band> findBandsLikeKeyWord(String keyword) {
        return bandRepository.findAllByNameContainingIgnoreCase(keyword);
    }
}
