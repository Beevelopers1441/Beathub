package com.beeveloper.beathub.common.dto;

import com.beeveloper.beathub.music.domain.Bucket;
import com.beeveloper.beathub.music.domain.Commit;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class BucketDto {

    private Long id;
    private String title;
    private int BPM;
    private String introduction;
    private List<UserInfoDto> contributors;
//    private List<CommitDto> commits;
//    private List<AudioDto> audios;

    public static BucketDto of(Bucket bucket) {
        BucketDto bucketDto = new BucketDto();
        bucketDto.id = bucket.getId();
        bucketDto.title = bucket.getTitle();
        bucketDto.BPM = bucket.getBPM();
        bucketDto.introduction = bucket.getIntroduction();
        bucketDto.contributors = UserInfoDto.ofUser(bucket.getContributors());
//        bucketDto.commits = CommitDto.of(bucket.getCommits());
//        bucketDto.audios = AudioDto.of(bucket.getAudios());
        return bucketDto;
    }

    public static List<BucketDto> of(List<Bucket> buckets) {
        return buckets.stream().map(BucketDto::of).collect(Collectors.toList());
    }
}
