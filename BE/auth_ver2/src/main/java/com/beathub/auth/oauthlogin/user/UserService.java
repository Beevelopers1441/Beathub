package com.beathub.auth.oauthlogin.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User signupOrLogin(UserReqModel userReqModel) {

        String requestEmail = userReqModel.getEmail();
        if (userRepository.findByEmail(requestEmail) != null) {
            User user = userRepository.findByEmail(requestEmail);
            return user;
        } else {
            User user = new User(
                    userReqModel.getUserId(),
                    userReqModel.getUserName(),
                    userReqModel.getEmail(),
                    userReqModel.getProfileImageUrl()
            );
            User savedUser = userRepository.save(user);
            return savedUser;
        }
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

}
