package com.beeveloper.beathub.post.domain;

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

    @ManyToOne
    private User author;

    // 아래 User와 Group 둘 중 하나는 빈 값이 될 수 있
    @OneToMany(mappedBy = "post")
    private List<Comment> comments = new ArrayList<Comment>();

    @ManyToMany
    private List<User> likeUsers = new ArrayList<User>();

    @ManyToOne(fetch = FetchType.LAZY)
    private Instrument tag;

    @Builder
    public Post(String title, String content, LocalDateTime createTime, User author, Instrument tag) {
        this.title = title;
        this.content = content;
        this.createTime = createTime;
        this.author = author;
        this.tag = tag;
    }

    public void addComments(Comment comment) {
        this.comments.add(comment);
    }

    public Post update(Instrument instrument, String title, String content) {
        this.title = title;
        this.content = content;
        this.tag = instrument;
        return this;
    }


}
