package com.beeveloper.beathub.common.dto;

import com.beeveloper.beathub.band.domain.BandMember;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class BandMemberDto {
//    private UserInfoDto member;
    private BandDto band;

    public static BandMemberDto of(BandMember bandMember) {
        BandMemberDto bandMemberDto = new BandMemberDto();
//        bandMemberDto.member = UserInfoDto.ofUser(bandMember.getUser());
        bandMemberDto.band = BandDto.of(bandMember.getBand());
        return bandMemberDto;
    }

    public static List<BandMemberDto> of(List<BandMember> bandMembers) {
        return bandMembers.stream().map(BandMemberDto::of).collect(Collectors.toList());
    }
}

