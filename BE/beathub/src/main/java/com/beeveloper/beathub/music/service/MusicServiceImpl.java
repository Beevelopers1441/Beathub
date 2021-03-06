package com.beeveloper.beathub.music.service;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.instrument.service.InstrumentService;
import com.beeveloper.beathub.music.domain.Audio;
import com.beeveloper.beathub.music.domain.AudioSetting;
import com.beeveloper.beathub.music.domain.Bucket;
import com.beeveloper.beathub.music.domain.Commit;
import com.beeveloper.beathub.music.dto.request.*;
import com.beeveloper.beathub.music.dto.response.AudioSettingResDto;
import com.beeveloper.beathub.music.exception.NotFoundBucket;
import com.beeveloper.beathub.music.repository.AudioRepository;
import com.beeveloper.beathub.music.repository.AudioSettingRepository;
import com.beeveloper.beathub.music.repository.BucketRepository;
import com.beeveloper.beathub.music.repository.CommitRepository;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.jwts.JwtService;
import com.beeveloper.beathub.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MusicServiceImpl implements MusicService{
    private final JwtService jwtService;
    private final UserService userService;
    private final InstrumentService instrumentService;
    private final BucketRepository bucketRepository;
    private final AudioRepository audioRepository;
    private final AudioSettingRepository audioSettingRepository;
    private final CommitRepository commitRepository;

    @Override
    public Bucket createBucket(BucketCreateDto bucketInfo, String jwtToken) {
        Optional<User> user = jwtService.returnUser(jwtToken);
        if (!user.isPresent()) {
            return null;
        }
        User ownerUser = user.get();
        Bucket bucket = Bucket.builder()
                .title(bucketInfo.getTitle())
                .BPM(bucketInfo.getBPM())
                .introduction(bucketInfo.getIntroduction())
                .ownerUser(ownerUser)
                .build();
        return bucketRepository.save(bucket);
    }

    @Override
    public List<Bucket> findAllBuckets() {
        List<Bucket> buckets = bucketRepository.findAll();
        return buckets;
    }

    @Override
    public Bucket findBucketById(Long bucketId) {
        Bucket bucket = bucketRepository.findById(bucketId).orElseThrow(NotFoundBucket::new);
        return bucket;
    }

    @Override
    public Audio createAudio(AudioCreateDto audioInfo, String jwtToken, Long bucketId) {
        Optional<User> user = jwtService.returnUser(jwtToken);
        if (!user.isPresent()) {
            return null;
        }
        User uploader = user.get();
        Bucket bucket = findBucketById(bucketId);
        Instrument instrument =  instrumentService.findByType(audioInfo.getInstrumentType());
        Audio audio = Audio.builder()
                .fileName(audioInfo.getFilename())
                .filePath(audioInfo.getFilepath())
                .uploader(uploader)
                .instrument(instrument)
                .bucket(bucket)
                .build();
        return audioRepository.save(audio);
    }

    @Override
    public List<Audio> findAudiosByBucket(Long bucketId) {
        Bucket bucket = findBucketById(bucketId);
        return audioRepository.findByBucket(bucket);
    }


    @Override
    public AudioSetting createAudioSetting(AudioSettingInfo audioSettingInfo, Commit commit, Audio audio) {
        AudioSetting audioSetting = AudioSetting.builder()
                .high(audioSettingInfo.getHigh())
                .mid(audioSettingInfo.getMid())
                .low(audioSettingInfo.getLow())
                .commit(commit)
                .audio(audio)
                .build();
        return audioSettingRepository.save(audioSetting);
    }

    @Override
    @Transactional
    public Commit createCommit(CommitCreateDto commitInfo, String jwtToken, Long bucketId) {
        Optional<User> user = jwtService.returnUser(jwtToken);
        if (!user.isPresent()) {
            return null;
        }
        User uploader = user.get();
        Bucket bucket = findBucketById(bucketId);
        Commit commit = Commit.builder()
                .title(commitInfo.getTitle())
                .introduction(commitInfo.getIntroduction())
                .createTime(LocalDateTime.now())
                .build();
        for (AudioSettingCreateDto audioSettingInfo: commitInfo.getAudioSettingInfos()) {
            Audio audio = audioRepository.findById(audioSettingInfo.getAudioId()).orElseThrow(NullPointerException::new);
            createAudioSetting(new AudioSettingInfo(audioSettingInfo), commit, audio);
        }
        return commitRepository.save(commit);
    }

    @Override
    public List<Audio> findAudiosLikeKeyword(String keyword) {
        return audioRepository.findAllByFileNameContainingIgnoreCase(keyword);
    }

    @Override
    public List<Bucket> findBucketsLikeKeyword(String keyword) {
        return bucketRepository.findAllByTitleContainingIgnoreCase(keyword);
    }
}
