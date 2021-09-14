package com.beeveloper.beathub.instrument.domain;

import com.beeveloper.beathub.post.domain.Post;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Instrument {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;

    @OneToMany(mappedBy = "tag")
    private List<Post> posts = new ArrayList<Post>();
}
