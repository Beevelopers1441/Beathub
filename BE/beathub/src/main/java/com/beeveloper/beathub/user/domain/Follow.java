package com.beeveloper.beathub.user.domain;

import com.beeveloper.beathub.band.domain.Band;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
public class Follow {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "from_user_id")
    @ManyToOne
    private User fromUser;

    @JoinColumn(name = "to_user_id")
    @ManyToOne
    private User toUser;

    
    @Builder
    public Follow(User fromUser, User toUser, Band toBand) {
        this.fromUser = fromUser;
        this.toUser = toUser;
    }
}