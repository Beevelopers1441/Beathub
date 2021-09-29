package com.beeveloper.beathub.user.service;

import com.beeveloper.beathub.user.domain.Follow;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.repository.FollowRepository;
import com.beeveloper.beathub.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FollowServiceImpl implements FollowService {

    private final FollowRepository followRepository;
    private final UserRepository userRepository;


    @Override
    @Transactional
    public Long getFollowIdByFromEmailToId(String email, Long toUserId) {
        User fromUser = userRepository.findByEmail(email);
        User toUser = userRepository.findById(toUserId).orElseThrow(RuntimeException::new);

        Follow follow = followRepository.findFollowByFromUserAndToUser(fromUser, toUser);

        if (follow != null) return follow.getId();
        else return Long.valueOf(-1);
    }

    @Override
    public List<Follow> getFollowers(Long id) {
        User user = userRepository.findById(id).orElseThrow(RuntimeException::new);
        return followRepository.findByToUser(user);
    }

    @Override
    public List<Follow> getFollowings(Long id) {
        User user = userRepository.findById(id).orElseThrow(RuntimeException::new);
        return followRepository.findByFromUser(user);
    }


    @Override
    @Transactional
    public Follow save(String email, Long targetId) {
        User fromUser = userRepository.findByEmail(email);
        User toUser = userRepository.findById(targetId).orElseThrow(RuntimeException::new);

        return followRepository.save(Follow.builder()
                .fromUser(fromUser)
                .toUser(toUser)
                .build());
    }
}
