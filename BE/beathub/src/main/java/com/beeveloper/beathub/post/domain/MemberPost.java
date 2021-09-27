package com.beeveloper.beathub.post.domain;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
@DiscriminatorValue("A")
@Getter
@NoArgsConstructor
public class MemberPost extends Post {

    @ManyToOne(fetch = FetchType.LAZY)
    private User authorUser;

    public MemberPost(
            String title,
            String content,
            User authorUser,
            LocalDateTime createTime,
            Instrument tag) {
        super(title, content, createTime, tag);
        this.authorUser = authorUser;
    }
}
