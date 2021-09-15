package com.beeveloper.beathub.instrument.domain;

import com.beeveloper.beathub.music.domain.Audio;
import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.user.domain.UserInstrument;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Instrument {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;

    @OneToMany(mappedBy = "instrument")
    private List<Audio> audios = new ArrayList<Audio>();

    @OneToMany(mappedBy = "tag")
    private List<Post> posts = new ArrayList<Post>();

    @OneToMany(mappedBy = "instrument")
    private List<UserInstrument> playerInfos = new ArrayList<UserInstrument>();
}
