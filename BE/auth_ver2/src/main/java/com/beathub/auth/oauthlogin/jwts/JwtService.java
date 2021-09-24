package com.beathub.auth.oauthlogin.jwts;

import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
import org.springframework.http.StreamingHttpOutputMessage;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.sql.DatabaseMetaData;
import java.time.Duration;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtService {

    private final String JWT_SECRET = "8sknjlO3NPTBqo319DHLNqsQAfRJEdKsETOdsasdfasdf";


    public String makeJwtToken(String userName, String email, String profileImageUrl) {

        Date now = new Date();

        Map<String, Object> payloads = new HashMap<>();
        payloads.put("email", email);
        payloads.put("userName", userName);
        payloads.put("profileImageUrl", profileImageUrl);

        String fresh = Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setIssuer("fresh")
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + Duration.ofMinutes(30).toMillis()))
                .setClaims(payloads)
                .signWith(SignatureAlgorithm.HS256, JWT_SECRET.getBytes(StandardCharsets.UTF_8))
                .compact();
        return fresh;
    }
}
