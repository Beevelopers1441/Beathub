package com.beeveloper.beathub.user.controller;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.instrument.service.InstrumentService;
import com.beeveloper.beathub.user.domain.Ability;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.UserInstrument;
import com.beeveloper.beathub.user.domain.dto.request.UserInstrumentCreateDto;
import com.beeveloper.beathub.user.domain.dto.request.UserInstrumentInputDto;
import com.beeveloper.beathub.user.domain.dto.response.UserInstrumentResDto;
import com.beeveloper.beathub.user.jwts.JwtService;
import com.beeveloper.beathub.user.service.UserInstrumentService;
import com.beeveloper.beathub.user.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@Api(value = "초기 회원가입 후 등록하는 악기프로필 관련 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/instrument")
public class UserInstrumentController {

    private final UserInstrumentService userInstrumentService;
    private final JwtService jwtService;
    private final UserService userService;
    private final InstrumentService instrumentService;

    @ApiOperation(value = "연주하는 악기 초기 설정 후 등록하는 API")
    @PostMapping("/register")
    public ResponseEntity<UserInstrumentResDto> register(
            @RequestHeader(value = "Authorization") String jwtToken,
            @RequestBody UserInstrumentInputDto inputDto) {

        // JWT Token 없으면 401 에러
        if (jwtToken == null) {
            return (ResponseEntity<UserInstrumentResDto>) ResponseEntity.status(401);
        }

        // Token 분해 후 User, Ability, Instrument 찾기
        User findUser = userService.findByEmail(jwtService.getProperties(jwtToken).get("email"));

        // 이미 등록된 악기는 수정, 새로운 악기는 등록
        Ability ability = Ability.valueOf(inputDto.getAbility());
//        List<UserInstrument> allByUser = userInstrumentService.findAllByUser(findUser);

//        for (UserInstrument userInstrument : allByUser) {
//            if (userInstrument.getInstrument().getType().equals(inputDto.getInstrument())) {
//                userInstrument
//            }
//        }

        Instrument instrument = instrumentService.findByType(inputDto.getInstrument());

        System.out.println("instrumentService = " + instrumentService);
        System.out.println("instrument = " + instrument.getType());


        UserInstrumentCreateDto dto = new UserInstrumentCreateDto(
                ability,
                inputDto.getModel(),
                instrument,
                findUser
        );

        UserInstrument savedUserInstrument = userInstrumentService.save(dto);
        System.out.println("savedUserInstrument = " + savedUserInstrument.getInstrument());
        return ResponseEntity.status(200).body(UserInstrumentResDto.of(savedUserInstrument));
    }
}
