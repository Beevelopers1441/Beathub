package com.beeveloper.beathub.band.dto.ressponse;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.domain.BandMember;
import lombok.Builder;
import lombok.Getter;


@Getter
public class BandMemberResDto {

    private String name;

    private String profileImageUrl;

    private String instrumentType;

    private String status;

    @Builder
    public BandMemberResDto(BandMember bandMember) {
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
}
