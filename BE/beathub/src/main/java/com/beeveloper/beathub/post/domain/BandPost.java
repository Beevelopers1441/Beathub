package com.beeveloper.beathub.post.domain;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.user.domain.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
@DiscriminatorValue("B")
@Getter
@NoArgsConstructor
public class BandPost extends Post{

    @ManyToOne(fetch = FetchType.LAZY)
    private Band authorBand;


    public BandPost(String title, String content, LocalDateTime now, User author, Band band, Instrument tag) {
        super(title, content, now, author, tag);
        this.authorBand = band;
    }
}
