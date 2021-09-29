package com.beeveloper.beathub.user.service;


import com.beeveloper.beathub.user.domain.Follow;

import java.util.List;

public interface FollowService {

    Follow save(Follow follow);

    Follow getFollowByFromUserAndToUser(Long fromUserId, Long toUserId);

//    Follow getFollowByFromUserAndToBand(Long fromUserId, Long toBandId);

    List<Follow> getUserFollowers(Long userId);

    List<Follow> getUserFollowings(Long userId);

//    List<Follow> getBandFollowers(Long bandId);

    void delete(Follow exist);
}
