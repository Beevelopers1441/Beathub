package com.beeveloper.beathub.common.dto;

import com.beeveloper.beathub.band.domain.BandMember;
import com.beeveloper.beathub.instrument.domain.Instrument;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class BandMemberForBandDto {
    private UserInfoDto member;
    private InstrumentDto type;

    public static BandMemberForBandDto of(BandMember bandMember) {
        BandMemberForBandDto bandMemberDto = new BandMemberForBandDto();
        bandMemberDto.member = UserInfoDto.ofUser(bandMember.getUser());
        bandMemberDto.type = InstrumentDto.of(bandMember.getInstrument());
        return bandMemberDto;
    }

    public static List<BandMemberForBandDto> of(List<BandMember> bandMembers) {
        return bandMembers.stream().map(BandMemberForBandDto::of).collect(Collectors.toList());
    }
}

