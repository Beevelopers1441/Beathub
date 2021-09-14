package com.beeveloper.beathub.group.domain;

import com.beeveloper.beathub.music.domain.Bucket;
import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.user.domain.User;
import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String imageUrl;

    private String introduction;

    @ManyToOne(fetch = FetchType.LAZY)
    private User leader;

    @OneToMany(mappedBy = "group")
    private List<GroupMember> members = new ArrayList<GroupMember>();

    @OneToMany(mappedBy = "ownerGroup")
    private List<Bucket> buckets = new ArrayList<Bucket>();

    @OneToMany(mappedBy = "authorGroup")
    private List<Post> posts = new ArrayList<Post>();

    @ManyToMany(mappedBy = "followGroups")
    private List<User> followers = new ArrayList<User>();
}
