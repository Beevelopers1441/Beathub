package com.beeveloper.beathub.music.dto.response;

import com.beeveloper.beathub.common.dto.AudioDto;
import com.beeveloper.beathub.common.dto.BucketDto;
import com.beeveloper.beathub.common.dto.CommitDto;
import com.beeveloper.beathub.common.dto.UserInfoDto;
import com.beeveloper.beathub.music.domain.Bucket;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@ApiModel("버킷 정보")
@NoArgsConstructor
public class BucketResDto {

    @ApiModelProperty(name = "버킷 id", example = "1")
    private Long id;

    @ApiModelProperty(name = "버킷 이름", example = "제목이요~")
    private String title;

    @ApiModelProperty(name = "BPM", example = "120")
    private int BPM;

    @ApiModelProperty(name = "버킷 설명", example = "설명이요~")
    private String introduction;

    public static BucketResDto of(Bucket bucket) {
        BucketResDto bucketResDto = new BucketResDto();
        bucketResDto.id = bucket.getId();
        bucketResDto.title = bucket.getTitle();
        bucketResDto.BPM = bucket.getBPM();
        bucketResDto.introduction = bucket.getIntroduction();
        return bucketResDto;
    }

    public static List<BucketResDto> of(List<Bucket> buckets) {
        return buckets.stream().map(BucketResDto::of).collect(Collectors.toList());
    }
}
