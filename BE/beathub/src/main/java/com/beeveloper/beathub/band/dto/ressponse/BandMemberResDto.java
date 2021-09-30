package com.beeveloper.beathub.band.dto.ressponse;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.domain.BandMember;
import lombok.Builder;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;


@Getter
public class BandMemberResDto {

    private Long id;

    private String name;

    private String profileImageUrl;

    private String instrumentType;

    private String status;

    @Builder
    public BandMemberResDto(BandMember bandMember) {
        this.id = bandMember.getId();
        this.name = bandMember.getUser().getName();
        this.profileImageUrl = bandMember.getUser().getImageUrl();
        this.instrumentType = bandMember.getInstrument().getType();
        this.status = String.valueOf(bandMember.getStatus());
    }

    public static BandMemberResDto of(BandMember bandMember) {
        BandMemberResDto bandMemberResDto = BandMemberResDto.builder()
                .bandMember(bandMember)
                .build();

        return bandMemberResDto;
    }

    public static List<BandMemberResDto> of(List<BandMember> bandMembers) {
        return bandMembers.stream().map(BandMemberResDto::of).collect(Collectors.toList());
    }

}
