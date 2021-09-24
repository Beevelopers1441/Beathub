package com.beeveloper.beathub.music.repository;

import com.beeveloper.beathub.music.domain.AudioSetting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AudioSettingRepository extends JpaRepository<AudioSetting, Long> {
}
