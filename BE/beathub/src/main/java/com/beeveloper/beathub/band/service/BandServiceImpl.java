package com.beeveloper.beathub.band.service;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.domain.BandMember;
import com.beeveloper.beathub.band.dto.request.BandCreateDto;
import com.beeveloper.beathub.band.repository.BandMemberRepository;
import com.beeveloper.beathub.band.repository.BandRepository;
import com.beeveloper.beathub.instrument.repository.InstrumentRepository;
import com.beeveloper.beathub.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BandServiceImpl implements BandService{
    private final BandRepository bandRepository;
    private final BandMemberRepository bandMemberRepository;
    private final InstrumentRepository instrumentRepository;

    @Override
    @Transactional(readOnly = true)
    public Optional<Band> findById(Long bandId) {
        return bandRepository.findById(bandId);
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
                bandInfo.getLeader()
        );

        // BandMember 등록용 Leader 악기 찾기
        User leader = bandInfo.getLeader();


//        BandMember bandMember = BandMember.builder()
//                .user(bandInfo.getLeader())
//                .instrument()
//                .build();
        return bandRepository.save(band);
    }
}
