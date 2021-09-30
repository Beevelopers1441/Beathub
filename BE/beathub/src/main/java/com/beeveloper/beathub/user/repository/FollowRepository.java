package com.beeveloper.beathub.user.repository;


import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.user.domain.Follow;
import com.beeveloper.beathub.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Long> {
    Follow findFollowByFromUserAndToUser(User fromUser, User toUser);

//    Follow findFollowByFromUserAndToBand(User fromUser, Band toBand);

    List<Follow> findByFromUser(User user);

    List<Follow> findByToUser(User user);

//    List<Follow> findByToBand(Band band);
}
