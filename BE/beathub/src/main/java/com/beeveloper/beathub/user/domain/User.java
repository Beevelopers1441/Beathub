package com.beeveloper.beathub.user.domain;

import com.beeveloper.beathub.group.domain.Band;
import com.beeveloper.beathub.group.domain.BandMember;
import com.beeveloper.beathub.music.domain.Audio;
import com.beeveloper.beathub.music.domain.Bucket;
import com.beeveloper.beathub.music.domain.Commit;
import com.beeveloper.beathub.post.domain.Comment;
import com.beeveloper.beathub.post.domain.Post;
import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String imageUrl;

    private String email;

    private String introduction;

    /**
     *  Band 관련
     */
    @OneToMany(mappedBy = "leader")
    private List<Band> leadingBands = new ArrayList<Band>();

    @ManyToMany
    @JoinTable(name = "follow_band",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "band_id"))
    private List<Band> followBands = new ArrayList<Band>();

    @OneToMany(mappedBy = "band")
    private List<BandMember> participatingBands = new ArrayList<BandMember>();

    /**
     * Post 관련
     */

    @ManyToMany
    private List<Post> likePosts = new ArrayList<Post>();

    @OneToMany(mappedBy = "authorUser")
    private List<Post> posts = new ArrayList<Post>();

    @OneToMany(mappedBy = "author")
    private List<Comment> comments = new ArrayList<Comment>();

    /**
     * Music 관련
     */

    @OneToMany(mappedBy = "uploader")
    private List<Audio> audios = new ArrayList<Audio>();

    @OneToMany(mappedBy = "author")
    private List<Commit> commits = new ArrayList<Commit>();

    @OneToMany(mappedBy = "ownerUser")
    private List<Bucket> buckets = new ArrayList<Bucket>();

    /**
     * Following 관련
     */

    @ManyToOne
    @JoinColumn
    private User userFollowing = this;

    @ManyToOne
    @JoinColumn
    private User userFollower = this;

    @OneToMany(mappedBy = "userFollowing")
    private List<User> followingList = new ArrayList<User>();

    @OneToMany(mappedBy = "userFollower")
    private List<User> followerList = new ArrayList<User>();

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