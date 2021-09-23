package com.beathub.auth.oauthlogin.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
            return user;
        }
    }

}
