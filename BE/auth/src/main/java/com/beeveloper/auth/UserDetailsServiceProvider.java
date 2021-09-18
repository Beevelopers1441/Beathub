package com.beeveloper.auth;

import com.beeveloper.auth.service.KakaoClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.HashMap;

/**
 * 클래스의 역할
 * 사용자 정보를 조회하고, Security Context 에 등록할 Authentication 객체를 만드는 일
 * 토큰을 생성할 인증서버 만들기
 */

@Slf4j
@Component
public class UserDetailsServiceProvider implements AuthenticationProvider {

    @Autowired
    KakaoClient kakaoClient;

    @Autowired
    @Qualifier("userDetailsServiceBean")
    private UserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {

        HashMap<String, Object> details = (HashMap<String, Object>) authentication.getDetails();

        // provider_token이 있으면 소셜에서 회원정보를 조회한다
        if (details.get("provider_token") != null) {
            String sso_user_id = ssoExtracter(details.get("provider_token"));

            if (sso_user_id != null) {
                // .. TODO DB 처리

                return new UsernamePasswordAuthenticationToken(
                        sso_user_id, null, AuthorityUtils.createAuthorityList("BASIC_USER")
                );
            }
        }

        // 기본인증
        String user_password = authentication.getCredentials().toString();
        UserDetails userDetails = userDetailsService.loadUserByUsername(authentication.getName());
        if (!passwordEncoder.matches(user_password, userDetails.getPassword())) {
            throw new BadCredentialsException("Password Match Failed");
        }

        return new UsernamePasswordAuthenticationToken(
                userDetails.getUsername(), userDetails.getPassword(), userDetails.getAuthorities()
        );
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }

    private String ssoExtracter(final Object extractorToken) {
        String conver_str = extractorToken.toString();
        String[] xHeader = conver_str.split(" ");
        if (xHeader.length == 2) {
            String access_token = xHeader[1];
            if (xHeader[0].equalsIgnoreCase("kakao")) {
                // 카카오 헤더일 경우 kakao 유저를 검증한다
                ResponseEntity<HashMap<String, Object>> response = kakaoClient.me(access_token);
                if (response.hasBody()) {
                    assert response.getBody() != null;
                    return response.getBody().get("id").toString();
                }
            }
        }
        return null;
    }
}