package com.beeveloper.beathub.user.service;

import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.dto.request.UpdateUserRequestDto;
import com.beeveloper.beathub.user.domain.dto.request.UserSaveRequestDto;

import java.util.List;
import java.util.Optional;

public interface UserService {

    User findById(Long id);

    List<User> findUsersLikeKeyword(String name);

    List<User> findAll();

    Optional<User> findByEmail(String email);

    User save(UserSaveRequestDto userSaveRequestDto);

    void like(User user, Post post);

    void unLike(User user, Post post);

    User update(User requestUser, UpdateUserRequestDto dto);
}
