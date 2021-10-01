package com.beeveloper.beathub.user.service;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.repository.BandRepository;
import com.beeveloper.beathub.band.service.BandService;
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
    private final BandRepository bandRepository;


    @Override
    public List<Follow> getUserFollowers(Long id) {
        User user = userRepository.findById(id).orElseThrow(RuntimeException::new);
        return followRepository.findByToUser(user);
    }

    @Override
    public List<Follow> getUserFollowings(Long id) {
        User user = userRepository.findById(id).orElseThrow(RuntimeException::new);
        return followRepository.findByFromUser(user);
    }

//    @Override
//    public List<Follow> getBandFollowers(Long bandId) {
//        Band band = bandRepository.findById(bandId).orElseThrow(RuntimeException::new);
//        return followRepository.findByToBand(band);
//    }

    @Override
    public void delete(Follow exist) {
        followRepository.delete(exist);
    }


    @Override
    @Transactional
    public Follow save(Follow follow) {
        return followRepository.save(follow);
    }

    @Override
    public Follow getFollowByFromUserAndToUser(Long fromUserId, Long toUserId) {
        User fromUser = userRepository.findById(fromUserId).orElseThrow(RuntimeException::new);
        User toUser = userRepository.findById(toUserId).orElseThrow(RuntimeException::new);

        return followRepository.findFollowByFromUserAndToUser(fromUser, toUser);
    }

//    @Override
//    public Follow getFollowByFromUserAndToBand(Long fromUserId, Long toBandId) {
//        User fromUser = userRepository.findById(fromUserId).orElseThrow(RuntimeException::new);
//        Band toBand = bandRepository.findById(toBandId).orElseThrow(RuntimeException::new);
//
//        return followRepository.findFollowByFromUserAndToBand(fromUser, toBand);
//    }
}
