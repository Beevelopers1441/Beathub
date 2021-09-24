package com.beeveloper.beathub.post.repository;

import com.beeveloper.beathub.post.domain.MemberPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberPostRepository extends JpaRepository<MemberPost, Long> {
}
