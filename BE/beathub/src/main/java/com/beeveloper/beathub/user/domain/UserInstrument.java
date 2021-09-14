package com.beeveloper.beathub.user.domain;

import com.beeveloper.beathub.instrument.domain.Instrument;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class UserInstrument {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private Ability ability;

    private String model;

    @ManyToOne
    private Instrument instrument;

    @ManyToOne
    private User player;
}
