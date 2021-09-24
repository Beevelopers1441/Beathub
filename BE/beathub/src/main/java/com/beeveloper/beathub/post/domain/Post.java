package com.beeveloper.beathub.post.domain;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn
@Getter
@NoArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String content;

    private boolean isRecruiting = true;

    private LocalDateTime createTime;

    // 아래 User와 Group 둘 중 하나는 빈 값이 될 수 있
    @OneToMany(mappedBy = "post")
    private List<Comment> comments = new ArrayList<Comment>();

    @ManyToMany
    private List<User> likeUsers = new ArrayList<User>();

    @ManyToOne
    private Instrument tag;

    public Post(String title, String content, LocalDateTime createTime) {
        this.title = title;
        this.content = content;
        this.createTime = createTime;
    }
}
