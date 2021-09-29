package com.beeveloper.beathub.user.controller;

import com.beeveloper.beathub.common.dto.UserInfoDto;
import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.instrument.service.InstrumentService;
import com.beeveloper.beathub.user.domain.Ability;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.common.dto.FollowRequestDto;
import com.beeveloper.beathub.user.domain.dto.request.UserInstrumentCreateDto;
import com.beeveloper.beathub.user.domain.dto.request.UserSaveRequestDto;
import com.beeveloper.beathub.user.domain.dto.response.UserProfileResDto;
import com.beeveloper.beathub.user.jwts.JwtService;
import com.beeveloper.beathub.user.service.FollowService;
import com.beeveloper.beathub.user.service.UserInstrumentService;
import com.beeveloper.beathub.user.service.UserService;
import com.beeveloper.beathub.user.service.UserServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.models.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.util.Map;

@Api(value = "회원가입 관련 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
@CrossOrigin(origins = "*")
@Slf4j
public class UserController {

    private final UserService userService;
    private final JwtService jwtService;
    private final FollowService followService;
    private final UserInstrumentService userInstrumentService;
    private final InstrumentService instrumentService;

    /**
     * 다른 사람 프로필 전달
     *
     * @return 있으면 User, 없으면 null
     */

    @ApiOperation(value = "UserId로 회원 조회")
    @GetMapping("/{userId}")
    @ResponseBody
    public ResponseEntity<UserProfileResDto> profile(HttpServletRequest request,
                                                     HttpServletResponse response,
                                                     @RequestParam(name = "userId") Long userId) {
        User findByEmail = userService.findById(userId);

        if (findByEmail != null) {
            return ResponseEntity.status(200).body(UserProfileResDto.of(findByEmail));
        } else {
            return null;
        }
    }

    @ApiOperation(value = "사용자가 처음 회원가입한 유저인지 아닌지 판별하는 api, 처음이면 true, 아니면 false")
    @GetMapping("/first")
    public boolean isMember(
            @RequestHeader(value = "Authorization") String jwtToken) {
        Map<String, String> properties = jwtService.getProperties(jwtToken);

        if (userService.findByEmail(properties.get("email")) == null) {
            return true;
        } else {
            return false;
        }
    }


    @ApiOperation(value = "Token을 이용한 처음 프로필 생성, 있는 회원이라면 조회후 리턴")
    @PostMapping
    public ResponseEntity<UserInfoDto> create(
            @RequestHeader(value = "Authorization") String jwtToken) {

        Map<String, String> properties = jwtService.getProperties(jwtToken);

        User existUser = userService.findByEmail(properties.get("email"));
        System.out.println("existUser = " + existUser);

        if (existUser != null) {
            return ResponseEntity.status(200).body(UserInfoDto.ofUser(existUser));
        }
        UserSaveRequestDto dto = new UserSaveRequestDto(
                properties.get("name"),
                properties.get("email"),
                properties.get("imageUrl")
                );
        User savedUser = userService.save(dto);
        // 초기 악기 설정
        Instrument instrument = instrumentService.findByType("기타(etc)");
        UserInstrumentCreateDto initUserInstrument = UserInstrumentCreateDto.builder()
                .ability(Ability.Junior)
                .instrument(instrument)
                .model("없음")
                .player(savedUser)
                .build();

        userInstrumentService.save(initUserInstrument);

        return ResponseEntity.status(201).body(UserInfoDto.ofUser(savedUser));
    }
}

