package com.beeveloper.beathub.band.service;


import com.beeveloper.beathub.band.domain.BandMember;
import com.beeveloper.beathub.band.dto.ressponse.BandMemberResDto;
import com.beeveloper.beathub.user.domain.User;

import java.util.List;

public interface BandMemberService {

    List<BandMemberResDto> findMembers(String bandName);

    BandMember apply(Long bandId, User user);

    BandMember findMemberInBand(Long bandName, User user);
}
