package com.beeveloper.beathub.music.domain;

import com.beeveloper.beathub.user.domain.User;
import lombok.Builder;
import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Commit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String introduction;

    private LocalDateTime createTime;

    @ManyToOne(fetch = FetchType.LAZY)
    private User author;

    @ManyToOne(fetch = FetchType.LAZY)
    private Bucket bucket;

    @OneToMany(mappedBy = "commit")
    private List<AudioSetting> audioSettings = new ArrayList<AudioSetting>();

    @Builder
    public Commit(String title, String introduction, LocalDateTime createTime) {
        this.title = title;
        this.introduction = introduction;
        this.createTime = createTime;
    }
}
