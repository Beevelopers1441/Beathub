package com.beeveloper.beathub.user.service;

import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.dto.request.UserSaveRequestDto;
import com.beeveloper.beathub.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User save(UserSaveRequestDto dto) {
        User user = new User(
                dto.getName(),
                dto.getImageUrl(),
                dto.getEmail()
        );
        return userRepository.save(user);
    }


}
