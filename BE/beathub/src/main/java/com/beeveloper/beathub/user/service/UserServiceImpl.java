package com.beeveloper.beathub.user.service;

import com.beeveloper.beathub.post.domain.Post;
import com.beeveloper.beathub.post.repository.PostRepository;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.dto.request.UpdateUserRequestDto;
import com.beeveloper.beathub.user.domain.dto.request.UserSaveRequestDto;
import com.beeveloper.beathub.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PostRepository postRepository;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> findByEmail(String email) {
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

    @Override
    public void like(User user, Post post) {
        user.addLikePost(post);
        post.getLikeUsers().add(user);
        userRepository.save(user);
        postRepository.save(post);
    }

    @Override
    public void unLike(User user, Post post) {
        user.removeLikePost(post);
        post.getLikeUsers().remove(user);
        userRepository.save(user);
    }

    @Override
    public User update(User requestUser, UpdateUserRequestDto requestDto) {
        User updateUser = requestUser.update(requestDto);
        return userRepository.save(updateUser);
    }

    public Optional<User> findById(Long userId) {
        return userRepository.findById(userId);
    }

    @Override
    public List<User> findUsersLikeKeyword(String name) {
        return userRepository.findAllByNameContainingIgnoreCase(name);
    }

}
