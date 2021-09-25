package com.beeveloper.beathub.user.controller;

import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.dto.request.UserSaveRequestDto;
import com.beeveloper.beathub.user.jwts.JwtService;
import com.beeveloper.beathub.user.service.UserServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@Api(value = "회원가입 관련 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
@Slf4j
public class UserController {

    private final UserServiceImpl userService;
    private final JwtService jwtService;

    /**
     * 다른 사람 프로필 전달
     *
     * @return 있으면 User, 없으면 null
     */

    @ApiOperation(value = "이메일로 회원 조회")
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

    @ApiOperation(value = "사용자가 처음 회원가입한 유저인지 아닌지 판별하는 api, 처음이면 true, 아니면 false")
    @GetMapping("/first")
    public boolean isMember(@RequestHeader("Authorization") String jwtToken) {
        Map<String, String> properties = jwtService.getProperties(jwtToken);

        if (userService.findByEmail(properties.get("email")) == null) {
            return true;
        } else {
            return false;
        }
    }


    @ApiOperation(value = "Token을 이용한 처음 프로필 생성, 있는 회원이라면 조회후 리턴")
    @PostMapping
    public User create(
            @RequestHeader("Authorization") String jwtToken) {

        Map<String, String> properties = jwtService.getProperties(jwtToken);

        User existUser = userService.findByEmail(properties.get("email"));
        System.out.println("existUser = " + existUser);

        if (existUser != null) {
            return existUser;
        }

        UserSaveRequestDto dto = new UserSaveRequestDto(
                properties.get("name"),
                properties.get("email"),
                properties.get("imageUrl")
        );

        User savedUser = userService.save(dto);
        return savedUser;
    }
}