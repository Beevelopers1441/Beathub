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

import java.util.ArrayList;
import java.util.List;


@Api(value = "초기 회원가입 후 등록하는 악기프로필 관련 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/instrument")
@CrossOrigin(value = "*")
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

//    ResponseEntity<UserInstrumentResDto>
    @ApiOperation(value = "유저의 등록된 악기를 수정, 인자로 List를 넘겨줌, 하나여도 리스트로 넘겨줌")
    @PutMapping()
    public void update(
            @RequestHeader(value = "Authorization") String jwtToken,
            @RequestBody List<UserInstrumentResDto> resDtoList)
    {
        User user = userService.findByEmail(jwtService.getProperties(jwtToken).get("email"));
        List<UserInstrument> userInstruments = userInstrumentService.findAllByUser(user);

        List<String> havingInstrumentList = new ArrayList<>();
        for (UserInstrument userInstrument : userInstruments) {
            havingInstrumentList.add(userInstrument.getInstrument().getType());
        }

        for (UserInstrumentResDto dto : resDtoList) {
            if (havingInstrumentList.contains(dto.getInstrument())) {
                Instrument instrument = instrumentService.findByType(dto.getInstrument());
                UserInstrument findUserInstrument = userInstrumentService.findByUserAndInstrument(user, instrument);
                userInstrumentService.update(findUserInstrument, dto);
                havingInstrumentList.remove(dto.getInstrument());
            } else {
                Instrument instrument = instrumentService.findByType(dto.getInstrument());
                Ability ability = Ability.valueOf(dto.getAbility().name());
                UserInstrumentCreateDto createDto = new UserInstrumentCreateDto(
                        ability,
                        dto.getModel(),
                        instrument,
                        user
                );
                UserInstrument savedUserInstrument = userInstrumentService.save(createDto);
            }
        }
        System.out.println("havingInstrumentList = " + havingInstrumentList.toString());

        if (havingInstrumentList != null) {
            while (!havingInstrumentList.isEmpty()) {
                String deleteType = havingInstrumentList.remove(0);
                Instrument instrument = instrumentService.findByType(deleteType);
                UserInstrument userInstrument = userInstrumentService.findByUserAndInstrument(user, instrument);
                System.out.println("deleteType = " + deleteType);
                userInstrumentService.delete(userInstrument);
            }
        }


        
        for (UserInstrument userInstrument : userInstruments) {
            System.out.println("userInstrument = " + userInstrument.getInstrument());
        }
    }
}
