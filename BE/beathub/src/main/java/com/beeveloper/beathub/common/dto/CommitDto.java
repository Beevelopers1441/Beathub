package com.beeveloper.beathub.common.dto;

import com.beeveloper.beathub.music.domain.Commit;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class CommitDto {
    private Long id;
    private String title;
    private String introduction;
    private String createTime;
    private UserInfoDto author;
    private BucketDto bucket;
    private List<AudioSettingDto> audioSettings;

    public static CommitDto of(Commit commit) {
        CommitDto commitDto = new CommitDto();
        commitDto.id = commit.getId();
        commitDto.title = commit.getTitle();
        commitDto.introduction = commit.getIntroduction();
        commitDto.createTime = commit.getCreateTime().toString();
        commitDto.author = UserInfoDto.ofUser(commit.getAuthor());
        commitDto.bucket = BucketDto.of(commit.getBucket());
        return commitDto;
    }

    public static List<CommitDto> of(List<Commit> commits) {
        return commits.stream().map(CommitDto::of).collect(Collectors.toList());
    }

}
