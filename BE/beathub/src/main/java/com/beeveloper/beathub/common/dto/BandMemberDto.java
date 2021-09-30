package com.beeveloper.beathub.common.dto;

import com.beeveloper.beathub.band.domain.BandMember;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class BandMemberDto {

    UserInfoDto user;
    BandDto band;

    public static BandMemberDto of(BandMember bandMember) {
        BandMemberDto dto = new BandMemberDto();
        dto.user = UserInfoDto.ofUser(bandMember.getUser());
        dto.band = BandDto.of(bandMember.getBand());
        return dto;
    }

    public static List<BandMemberDto> of(List<BandMember> bandMemberList) {
        return bandMemberList.stream().map(BandMemberDto::of).collect(Collectors.toList());
    }
}
