package com.beeveloper.beathub.post.domain;

import com.beeveloper.beathub.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    private LocalDateTime createTime;

    @ManyToOne(fetch = FetchType.LAZY)
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    private User author;

    @Builder
    public Comment(String content, LocalDateTime createTime, User author, Post post) {
        this.content = content;
        this.createTime = createTime;
        this.author = author;
        this.post = post;
    }
}
