package com.beeveloper.beathub.music.service;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.instrument.service.InstrumentService;
import com.beeveloper.beathub.music.domain.Audio;
import com.beeveloper.beathub.music.domain.AudioSetting;
import com.beeveloper.beathub.music.domain.Bucket;
import com.beeveloper.beathub.music.domain.Commit;
import com.beeveloper.beathub.music.dto.request.AudioCreateDto;
import com.beeveloper.beathub.music.dto.request.AudioSettingCreateDto;
import com.beeveloper.beathub.music.dto.request.BucketCreateDto;
import com.beeveloper.beathub.music.repository.AudioRepository;
import com.beeveloper.beathub.music.repository.AudioSettingRepository;
import com.beeveloper.beathub.music.repository.BucketRepository;
import com.beeveloper.beathub.music.repository.CommitRepository;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.jwts.JwtService;
import com.beeveloper.beathub.user.service.UserService;
import com.beeveloper.beathub.user.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
        User ownerUser = userService.findByEmail(jwtService.getProperties(jwtToken).get("email"));
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
        Bucket bucket = bucketRepository.findById(bucketId).orElseThrow(NullPointerException::new);
        return bucket;
    }

    @Override
    public Audio createAudio(AudioCreateDto audioInfo, String jwtToken, Long bucketId) {
        User uploader = userService.findByEmail(jwtService.getProperties(jwtToken).get("email"));
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
    public AudioSetting createAudioSetting(AudioSettingCreateDto audioSettingInfo, Commit commit, Audio audio) {
        AudioSetting audioSetting = AudioSetting.builder()
                .high(audioSettingInfo.getHigh())
                .mid(audioSettingInfo.getMid())
                .low(audioSettingInfo.getLow())
                .commit(commit)
                .audio(audio)
                .build();
        return audioSettingRepository.save(audioSetting);
    }


}
