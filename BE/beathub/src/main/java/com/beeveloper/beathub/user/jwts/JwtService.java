package com.beeveloper.beathub.user.jwts;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtService {

    private final String JWT_SECRET = "8sknjlO3NPTBqo319DHLNqsQAfRJEdKsETOdsasdfasdf";
    SignatureAlgorithm sa = SignatureAlgorithm.HS256;

    public Map<String, String> getProperties(String jwtToken) {
        Map<String, String> result = new HashMap<>();

        Claims claims = Jwts.parser()
                .setSigningKey(JWT_SECRET.getBytes(StandardCharsets.UTF_8)).parseClaimsJws(jwtToken).getBody();
        String email = (String) claims.get("email");
        String name = (String) claims.get("userName");
        String imageUrl = (String) claims.get("profileImageUrl");

        result.put("email", email);
        result.put("name", name);
        result.put("imageUrl", imageUrl);

        return result;
    }



}
