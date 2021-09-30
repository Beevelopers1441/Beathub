package com.beeveloper.beathub.music.repository;

import com.beeveloper.beathub.music.domain.Audio;
import com.beeveloper.beathub.music.domain.Bucket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AudioRepository extends JpaRepository<Audio, Long> {
    List<Audio> findByBucket(Bucket bucket);
}
