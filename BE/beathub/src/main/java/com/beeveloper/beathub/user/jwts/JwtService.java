package com.beeveloper.beathub.user.jwts;

import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.service.UserService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class JwtService {

    private final UserService userService;

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

    public Optional<User> returnUser(String jwtToken) {
        return userService.findByEmail(getProperties(jwtToken).get("email"));
    }


}
