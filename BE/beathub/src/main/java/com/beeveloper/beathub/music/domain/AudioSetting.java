package com.beeveloper.beathub.music.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class AudioSetting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int high;

    private int mid;

    private int low;

    private int volume;

    @ManyToOne
    private Commit commit;

    @ManyToOne
    private Audio audio;
}
