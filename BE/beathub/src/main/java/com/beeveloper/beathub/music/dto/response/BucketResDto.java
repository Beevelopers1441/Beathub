package com.beeveloper.beathub.music.dto.response;

import com.beeveloper.beathub.common.dto.AudioDto;
import com.beeveloper.beathub.common.dto.BucketDto;
import com.beeveloper.beathub.common.dto.CommitDto;
import com.beeveloper.beathub.common.dto.UserInfoDto;
import com.beeveloper.beathub.music.domain.Bucket;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class BucketResDto {

    private Long id;
    private String title;
    private int BPM;
    private String introduction;

    public static BucketResDto of(Bucket bucket) {
        BucketResDto bucketResDto = new BucketResDto();
        bucketResDto.id = bucket.getId();
        bucketResDto.title = bucket.getTitle();
        bucketResDto.BPM = bucket.getBPM();
        bucketResDto.introduction = bucket.getIntroduction();
        return bucketResDto;
    }

    public static List<BucketDto> of(List<Bucket> buckets) {
        return buckets.stream().map(BucketDto::of).collect(Collectors.toList());
    }
}
