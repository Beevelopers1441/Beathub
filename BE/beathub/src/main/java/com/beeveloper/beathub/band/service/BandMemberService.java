package com.beeveloper.beathub.band.service;


import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.domain.BandMember;
import com.beeveloper.beathub.band.dto.ressponse.BandMemberResDto;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.UserInstrument;

import java.util.List;

public interface BandMemberService {

    List<BandMemberResDto> findMembers(String bandName);

    BandMember apply(Long bandId, User user, UserInstrument instrument);

    BandMember findMemberInBand(Long bandName, User user);

    List<BandMember> findWatingMember(Long bandId);

    void approve(Band band, User user);

    List<BandMember> getApplies(List<Band> leadingBands);

    void delete(BandMember findBandMember);
}
