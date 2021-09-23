package com.beeveloper.beathub.user.controller;

import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.UserSaveRequestDto;
import com.beeveloper.beathub.user.jwts.JwtService;
import com.beeveloper.beathub.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.graalvm.compiler.lir.LIRInstruction;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
@Slf4j
public class UserController {

    private final UserService userService;
    private final JwtService jwtService;

    /**
     * 다른 사람 프로필 전달
     *
     * @return 있으면 User, 없으면 null
     */
    @GetMapping("/{email}")
    @ResponseBody
    public User profile(HttpServletRequest request,
                        HttpServletResponse response,
                        @RequestParam(name = "email") String email) {
        User findByEmail = userService.findByEmail(email);

        if (findByEmail != null) {
            return findByEmail;
        } else {
            return null;
        }
    }

    @PostMapping
    public User create(@RequestHeader("Authorization") String jwtToken) {

        System.out.println("jwtToken = " + jwtToken);
        Map<String, String> properties = jwtService.getProperties(jwtToken);
        System.out.println("properties = " + properties);

        UserSaveRequestDto dto = new UserSaveRequestDto(
                properties.get("name"),
                properties.get("email"),
                properties.get("imageUrl")
        );

        User savedUser = userService.save(dto);
        return savedUser;
    }
}
