package com.beeveloper.beathub.music.service;

import com.beeveloper.beathub.music.domain.Bucket;
import com.beeveloper.beathub.music.dto.request.BucketCreateDto;
import com.beeveloper.beathub.music.repository.AudioRepository;
import com.beeveloper.beathub.music.repository.AudioSettingRepository;
import com.beeveloper.beathub.music.repository.BucketRepository;
import com.beeveloper.beathub.music.repository.CommitRepository;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.jwts.JwtService;
import com.beeveloper.beathub.user.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MusicServiceImpl implements MusicService{
    private final JwtService jwtService;
    private final UserServiceImpl userService;
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


}
