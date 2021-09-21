package com.beeveloper.beathub.post.domain;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.post.dto.request.MemberPostCreateDto;
import com.beeveloper.beathub.user.domain.User;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String content;

    private boolean isRecruiting = true;

    private LocalDateTime createTime;

    // 아래 User와 Group 둘 중 하나는 빈 값이 될 수 있음
    @ManyToOne(fetch = FetchType.LAZY)
    private User authorUser;

    @ManyToOne(fetch = FetchType.LAZY)
    private Band authorBand;

    @OneToMany(mappedBy = "post")
    private List<Comment> comments = new ArrayList<Comment>();


    @ManyToMany
    private List<User> likeUsers = new ArrayList<User>();

    @ManyToOne
    private Instrument tag;

    @Builder
    public Post(String title, String content, User authorUser, Band authorBand, LocalDateTime createTime) {
        this.title = title;
        this.content = content;
        this.authorUser = authorUser;
        this.authorBand = authorBand;
        this.createTime = createTime;
    }
}
