package com.beeveloper.beathub.band.domain;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.user.domain.User;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class BandMember {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private Status status;

    @ManyToOne
    private User user;

    @ManyToOne
    private Band band;

    @ManyToOne
    private Instrument instrument;
}
