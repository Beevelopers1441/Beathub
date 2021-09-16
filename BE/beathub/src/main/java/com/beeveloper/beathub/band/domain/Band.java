package com.beeveloper.beathub.band.domain;

import com.beeveloper.beathub.music.domain.Bucket;
import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.user.domain.User;
import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Band {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String imageUrl;

    private String introduction;

    @ManyToOne(fetch = FetchType.LAZY)
    private User leader;

    @OneToMany(mappedBy = "band")
    private List<BandMember> members = new ArrayList<BandMember>();

    @OneToMany(mappedBy = "ownerBand")
    private List<Bucket> buckets = new ArrayList<Bucket>();

    @OneToMany(mappedBy = "authorBand")
    private List<Post> posts = new ArrayList<Post>();

    @ManyToMany(mappedBy = "followBands")
    private List<User> followers = new ArrayList<User>();
}
