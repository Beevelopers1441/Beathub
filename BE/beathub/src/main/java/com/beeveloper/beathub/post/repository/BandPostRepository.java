package com.beeveloper.beathub.post.repository;

import com.beeveloper.beathub.post.domain.BandPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BandPostRepository extends JpaRepository<BandPost, Long> {
}
