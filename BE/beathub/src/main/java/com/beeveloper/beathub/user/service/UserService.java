package com.beeveloper.beathub.user.service;

import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.dto.request.UserSaveRequestDto;

import java.util.List;

public interface UserService {

    List<User> findAll();

    User findByEmail(String email);

    User save(UserSaveRequestDto dto);
}
