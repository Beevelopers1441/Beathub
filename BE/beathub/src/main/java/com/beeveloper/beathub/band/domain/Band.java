package com.beeveloper.beathub.band.domain;

import com.beeveloper.beathub.band.repository.BandRepository;
import com.beeveloper.beathub.music.domain.Bucket;
import com.beeveloper.beathub.post.domain.BandPost;
import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.user.domain.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Band {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String imageUrl = null;

    private String introduction;

    @ManyToOne(fetch = FetchType.LAZY)
    private User leader;

    @OneToMany(mappedBy = "band")
    private List<BandMember> members = new ArrayList<BandMember>();

    @JsonIgnore
    @OneToMany(mappedBy = "ownerBand")
    private List<Bucket> buckets = new ArrayList<Bucket>();

    @JsonIgnore
    @OneToMany(mappedBy = "authorBand")
    private List<BandPost> bandPosts = new ArrayList<BandPost>();

    @JsonIgnore
    @ManyToMany(mappedBy = "followBands")
    private List<User> followers = new ArrayList<User>();


    public Band(
            String name,
            String imageUrl,
            String introduction,
            User leader
    ) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.introduction = introduction;
        this.leader = leader;

        BandMember bandMember = new BandMember(

        );
    }
}
