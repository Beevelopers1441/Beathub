package com.beeveloper.beathub.music.domain;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Bucket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private int BPM;

    private String introduction;

    @ManyToMany
    private List<User> contributors = new ArrayList<User>();

    @OneToMany(mappedBy = "bucket")
    private List<Commit> commits = new ArrayList<Commit>();

    @OneToMany(mappedBy = "bucket")
    private List<Audio> audios = new ArrayList<Audio>();

    /**
     * User 혹은 Group 둘 중 하나 null 값 허용
     */

    @ManyToOne
    private User ownerUser;

    @ManyToOne
    private Band ownerBand;

    @Builder
    public Bucket(String title, int BPM, String introduction,User ownerUser) {
        this.title = title;
        this.BPM = BPM;
        this.introduction = introduction;
        this.ownerUser = ownerUser;
    }

}
