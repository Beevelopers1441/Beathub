package com.beeveloper.beathub.music.repository;

import com.beeveloper.beathub.music.domain.Bucket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BucketRepository extends JpaRepository<Bucket, Long> {

    List<Bucket> findAllByTitleContainingIgnoreCase(String keyword);
}
