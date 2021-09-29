package com.beeveloper.beathub.music.service;

import com.beeveloper.beathub.music.domain.Audio;
import com.beeveloper.beathub.music.domain.AudioSetting;
import com.beeveloper.beathub.music.domain.Bucket;
import com.beeveloper.beathub.music.domain.Commit;
import com.beeveloper.beathub.music.dto.request.AudioCreateDto;
import com.beeveloper.beathub.music.dto.request.AudioSettingCreateDto;
import com.beeveloper.beathub.music.dto.request.BucketCreateDto;
import com.beeveloper.beathub.music.dto.request.CommitCreateDto;

import java.util.List;

public interface MusicService {
    Bucket createBucket(BucketCreateDto bucketInfo, String jwtToken);
    List<Bucket> findAllBuckets();
    Bucket findBucketById(Long bucketId);
    Audio createAudio(AudioCreateDto audioInfo, String jwtToken, Long bucketId);
    List<Audio> findAudiosByBucket(Long bucketId);
//    Commit creatCommit(CommitCreateDto commitInfo, Long bucketId);
//    List<Commit> findAllCommitsInBucket(Long bucketId);
//    Commit findCommit(Long commitId);
//    List<Audio> findAllAudios();
//    Audio findAudio(Long audioId);
//    AudioSetting createAudioSetting(AudioSettingCreateDto audioSettingInfo, Long commitId, Long audioId);
}
