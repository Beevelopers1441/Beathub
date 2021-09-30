package com.beeveloper.beathub.user.domain;

import com.beeveloper.beathub.common.dto.UserInstrumentDto;
import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.user.domain.dto.response.UserInstrumentResDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.util.Assert;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class UserInstrument {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private Ability ability;

    @ManyToOne
    private Instrument instrument;

    @ManyToOne
    private User player;


    @Builder
    public UserInstrument(
            Ability ability,
            Instrument instrument,
            User player
    ) {
        Assert.hasText(instrument.getType(), "악기가 없습니다");
        Assert.hasText(player.getEmail(), "연주자가 없습니다");

        this.ability = ability;
        this.instrument = instrument;
        this.player = player;
    }

    public UserInstrument update(UserInstrumentResDto userInstrumentDto) {
        Ability ability = Ability.valueOf(userInstrumentDto.getAbility().name());
        this.ability = ability;
        return this;
    }
}
