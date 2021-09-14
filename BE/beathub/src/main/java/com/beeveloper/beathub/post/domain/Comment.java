package com.beeveloper.beathub.post.domain;

import com.beeveloper.beathub.user.domain.User;
import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    private LocalDateTime createTime;

    @ManyToOne
    private Post post;

    @ManyToOne
    private User author;

}
