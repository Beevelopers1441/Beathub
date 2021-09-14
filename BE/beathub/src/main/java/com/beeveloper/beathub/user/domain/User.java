package com.beeveloper.beathub.user.domain;

import com.beeveloper.beathub.group.domain.Group;
import com.beeveloper.beathub.post.domain.Post;
import lombok.Getter;
import lombok.Setter;

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

    @ManyToMany
    private List<Post> likePosts = new ArrayList<Post>();

    @OneToMany(mappedBy = "authorUser")
    private List<Post> posts = new ArrayList<Post>();


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

    @OneToMany(mappedBy = "leader")
    private List<Group> leadingGroups = new ArrayList<Group>();

    @ManyToMany
    @JoinTable(name = "follow_group",
                joinColumns = @JoinColumn(name = "user_id"),
                inverseJoinColumns = @JoinColumn(name = "group_id"))
    private List<Group> followGroups = new ArrayList<Group>();


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

    public void addFollowingGroup(Group following) {
        this.followGroups.add(following);
    }
}