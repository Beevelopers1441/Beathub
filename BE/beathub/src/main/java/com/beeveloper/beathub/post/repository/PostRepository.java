package com.beeveloper.beathub.post.repository;

import com.beeveloper.beathub.post.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Long, Post> {
}
