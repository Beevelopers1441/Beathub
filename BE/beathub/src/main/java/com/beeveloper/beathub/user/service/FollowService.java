package com.beeveloper.beathub.user.service;


import com.beeveloper.beathub.user.domain.Follow;

import java.util.List;

public interface FollowService {


    Follow save(String name, Long targetId);

    Long getFollowIdByFromEmailToId(String email, Long toUserId);

    List<Follow> getFollowers(Long id);

    List<Follow> getFollowings(Long id);
}
