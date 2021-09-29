package com.beeveloper.beathub.common.dto;

import com.beeveloper.beathub.band.domain.BandMember;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class BandMemberForBandDto {
    private UserInfoDto member;
//    private BandDto band;

    public static BandMemberForBandDto of(BandMember bandMember) {
        BandMemberForBandDto bandMemberDto = new BandMemberForBandDto();
        bandMemberDto.member = UserInfoDto.ofUser(bandMember.getUser());
//        bandMemberDto.band = BandDto.of(bandMember.getBand());
        return bandMemberDto;
    }

    public static List<BandMemberForBandDto> of(List<BandMember> bandMembers) {
        return bandMembers.stream().map(BandMemberForBandDto::of).collect(Collectors.toList());
    }
}

