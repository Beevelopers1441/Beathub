package com.beeveloper.beathub.common.dto;

import com.beeveloper.beathub.band.domain.BandMember;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class BandMemberForMemberDto {
//    private UserInfoDto member;
    private BandDto band;

    public static BandMemberForMemberDto of(BandMember bandMember) {
        BandMemberForMemberDto bandMemberDto = new BandMemberForMemberDto();
//        bandMemberDto.member = UserInfoDto.ofUser(bandMember.getUser());
        bandMemberDto.band = BandDto.of(bandMember.getBand());
        return bandMemberDto;
    }

    public static List<BandMemberForMemberDto> of(List<BandMember> bandMembers) {
        return bandMembers.stream().map(BandMemberForMemberDto::of).collect(Collectors.toList());
    }
}

