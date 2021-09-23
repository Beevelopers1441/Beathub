package com.beathub.auth.oauthlogin.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {

    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private @NotNull @Size(max = 64) String userId;

    private String userName;

    private String profileImageUrl = null;

    private String email;


    public User(
                @NotNull @Size(max = 64) String userId,
                @NotNull @Size(max = 100) String username,
                @NotNull @Size(max = 512) String email,
                @Size(max = 512) String profileImageUrl
    ) {
        this.userId = userId;
        this.userName = username;
        this.email = email;
        this.profileImageUrl = profileImageUrl;
    }
}
