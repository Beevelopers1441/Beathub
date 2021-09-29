package com.beeveloper.beathub.user.service;

import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.dto.request.UserSaveRequestDto;

import java.util.List;

public interface UserService {

    User findById(Long id);

    List<User> findAll();

    User findByEmail(String email);

    User save(UserSaveRequestDto userSaveRequestDto);

    void like(User user, Post post);

    void unLike(User user, Post post);
}
