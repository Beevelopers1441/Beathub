package com.beeveloper.beathub.user.domain;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.domain.BandMember;
import com.beeveloper.beathub.music.domain.Audio;
import com.beeveloper.beathub.music.domain.Bucket;
import com.beeveloper.beathub.music.domain.Commit;
import com.beeveloper.beathub.post.domain.Comment;
import com.beeveloper.beathub.post.domain.MemberPost;
import com.beeveloper.beathub.post.domain.Post;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Builder
    public User(
            @NotNull String name,
            String imageUrl,
            @NotNull String email
        ) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.email = email;
    }

    @JsonIgnore
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String imageUrl = null;

    private String email;

    private String introduction = null;

    /**
     *  Band 관련
     */
    @JsonIgnore
    @OneToMany(mappedBy = "leader")
    private List<Band> leadingBands = new ArrayList<Band>();

    @JsonIgnore
    @ManyToMany
    @JoinTable(name = "follow_band",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "band_id"))
    private List<Band> followBands = new ArrayList<Band>();

    @JsonIgnore
    @OneToMany(mappedBy = "band")
    private List<BandMember> participatingBands = new ArrayList<BandMember>();

    /**
     * Post 관련
     */

    @JsonIgnore
    @ManyToMany
    private List<Post> likePosts = new ArrayList<Post>();

    @JsonIgnore
    @OneToMany(mappedBy = "authorUser")
    private List<MemberPost> memberPosts = new ArrayList<MemberPost>();

    @JsonIgnore
    @OneToMany(mappedBy = "author")
    private List<Comment> comments = new ArrayList<Comment>();

    /**
     * Music 관련
     */

    @JsonIgnore
    @OneToMany(mappedBy = "uploader")
    private List<Audio> audios = new ArrayList<Audio>();

    @JsonIgnore
    @OneToMany(mappedBy = "author")
    private List<Commit> commits = new ArrayList<Commit>();

    @JsonIgnore
    @OneToMany(mappedBy = "ownerUser")
    private List<Bucket> buckets = new ArrayList<Bucket>();

    /**
     * Following 관련
     */

    @JsonIgnore
    @ManyToOne
    @JoinColumn
    private User userFollowing = this;

    @JsonIgnore
    @ManyToOne
    @JoinColumn
    private User userFollower = this;

    @JsonIgnore
    @OneToMany(mappedBy = "userFollowing")
    private List<User> followingList = new ArrayList<User>();

    @JsonIgnore
    @OneToMany(mappedBy = "userFollower")
    private List<User> followerList = new ArrayList<User>();

    // METHODS

    public void addFollowingUser(User following) {
        this.followingList.add(following);

        if(!following.getFollowerList().contains(this)) {
            following.getFollowerList().add(this);
        }
        //연관관계의 주인을 통한 확인
        if(!following.getUserFollower().getFollowerList().contains(this)) {
            following.getUserFollower().getFollowerList().add(this);
        }
    }
    public void addFollowerUser(User follower) {
        this.followerList.add(follower);

        if(follower.getFollowingList().contains(this)) {
            follower.getFollowingList().add(this);
        }
        //연관관계의 주인을 통한 확인
        if(!follower.getUserFollowing().getFollowingList().contains(this)) {
            follower.getUserFollowing().getFollowingList().add(this);
        }
    }

    public void addFollowingBand(Band following) {
        this.followBands.add(following);
    }
}