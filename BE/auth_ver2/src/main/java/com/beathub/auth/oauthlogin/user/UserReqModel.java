package com.beathub.auth.oauthlogin.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserReqModel {
    private String userId;
    private String userName;
    private String profileImageUrl;
    private String email;
}
