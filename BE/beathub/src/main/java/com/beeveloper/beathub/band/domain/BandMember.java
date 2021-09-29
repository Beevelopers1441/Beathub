package com.beeveloper.beathub.band.domain;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class BandMember {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private Status status = Status.Waiting;

    @ManyToOne(fetch = FetchType.EAGER)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    private Band band;

    @ManyToOne(fetch = FetchType.EAGER)
    private Instrument instrument;

    @Builder
    public BandMember(User user, Band band, Instrument instrument) {
        this.user = user;
        this.band = band;
        this.instrument = instrument;
    }

    public static BandMember create(
            User user,
            Band band,
            Instrument instrument
    ) {
        BandMember bandMember = BandMember.builder()
                .user(user)
                .instrument(instrument)
                .band(band)
                .build();
        return bandMember;
    }

    public static BandMember createBandMemberForLeader(
            User user,
            Band band,
            Instrument instrument
    ) {
        BandMember bandMember = BandMember.builder()
                .user(user)
                .band(band)
                .instrument(instrument)
                .build();
        bandMember.status = Status.Approved;
        return bandMember;
    }
}
