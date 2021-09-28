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
@NoArgsConstructor
@ApiModel("버킷 정보")
public class BucketDetailResDto {

    @ApiModelProperty(name = "버킷 id", example = "1")
    private Long id;

    @ApiModelProperty(name = "버킷 이름", example = "제목이요~")
    private String title;

    @ApiModelProperty(name = "BPM", example = "120")
    private int BPM;

    @ApiModelProperty(name = "버킷 설명", example = "설명이요~")
    private String introduction;

    @ApiModelProperty(name = "기여자들", example = "파일 올린 사람들 정보")
    private List<UserInfoDto> contributors;

    @ApiModelProperty(name = "커밋들", example = "커밋들 정보")
    private List<CommitDto> commits;

    @ApiModelProperty(name = "오디오들", example = "올린 오디오들 정보")
    private List<AudioDto> audios;

    public static BucketDetailResDto of(Bucket bucket) {
        BucketDetailResDto bucketDetailResDto = new BucketDetailResDto();
        bucketDetailResDto.id = bucket.getId();
        bucketDetailResDto.title = bucket.getTitle();
        bucketDetailResDto.BPM = bucket.getBPM();
        bucketDetailResDto.introduction = bucket.getIntroduction();
        bucketDetailResDto.contributors = UserInfoDto.ofUser(bucket.getContributors());
        bucketDetailResDto.commits = CommitDto.of(bucket.getCommits());
        bucketDetailResDto.audios = AudioDto.of(bucket.getAudios());
        return bucketDetailResDto;
    }

    public static List<BucketDto> of(List<Bucket> buckets) {
        return buckets.stream().map(BucketDto::of).collect(Collectors.toList());
    }
}
