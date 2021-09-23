package com.beathub.auth.oauthlogin.controller;

import com.beathub.auth.oauthlogin.jwts.JwtService;
import com.beathub.auth.oauthlogin.user.User;
import com.beathub.auth.oauthlogin.user.UserRepository;
import com.beathub.auth.oauthlogin.user.UserReqModel;
import com.beathub.auth.oauthlogin.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.transform.Result;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class OAuth2Controller {

    private final UserService userService;
    private final JwtService jwtService;

    @PostMapping("/login")
    @ResponseBody
    public String signup(HttpServletRequest request,
                         HttpServletResponse response,
                         @RequestBody UserReqModel userReqModel) {


        User user = userService.signupOrLogin(userReqModel);
        String token = jwtService.makeJwtToken(user.getEmail());
        response.setHeader("Authorization", token);

        return user.toString();
    }




}