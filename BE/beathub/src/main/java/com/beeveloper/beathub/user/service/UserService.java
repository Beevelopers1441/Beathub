package com.beeveloper.beathub.user.service;

import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.UserSaveRequestDto;
import com.beeveloper.beathub.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User save(UserSaveRequestDto dto) {
        User savedUser = userRepository.save(dto.toEntity());
        return savedUser;
    }


}
