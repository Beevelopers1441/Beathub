package com.beeveloper.beathub.post.domain;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@DiscriminatorValue("B")
@Getter
public class BandPost extends Post{

    @ManyToOne(fetch = FetchType.LAZY)
    private Band authorBand;

    @Builder
    public BandPost(String title, String content, Band authorBand, LocalDateTime createTime) {
        super(title, content, createTime);
        this.authorBand = authorBand;
    }
}
