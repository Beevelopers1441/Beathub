package com.beeveloper.auth.member;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import lombok.Setter;

@Setter
public class SocialJoinVO {

    private String email;
    private String nickname;
    private String profileImage;
    private String platform;
    private GoogleIdToken accessToken;



}
