package com.beathub.auth.oauthlogin.jwts;

import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
import org.springframework.stereotype.Service;

import java.sql.DatabaseMetaData;
import java.time.Duration;
import java.util.Date;

@Service
public class JwtService {

    private final String JWT_SECRET = "8sknjlO3NPTBqo319DHLNqsQAfRJEdKsETOdsasdfasdf";


    public String makeJwtToken(String email) {

        Date now = new Date();
        return Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setIssuer("fresh")
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + Duration.ofMinutes(30).toMillis()))
                .claim("email", email)
                .signWith(SignatureAlgorithm.HS256, JWT_SECRET)
                .compact();
    }
}
