package com.beeveloper.beathub.music.domain;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.user.domain.User;
import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Audio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fileName;

    private String filePath;

    @ManyToOne
    private Instrument instrument;

    @ManyToOne
    private User uploader;

    @ManyToOne
    private Bucket bucket;

    @OneToMany(mappedBy = "audio")
    private List<AudioSetting> audioSettings = new ArrayList<AudioSetting>();
}
