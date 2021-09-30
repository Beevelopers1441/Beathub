package com.beeveloper.beathub.music.dto.response;

import com.beeveloper.beathub.common.dto.AudioSettingDto;
import com.beeveloper.beathub.common.dto.BucketDto;
import com.beeveloper.beathub.common.dto.CommitDto;
import com.beeveloper.beathub.common.dto.UserInfoDto;
import com.beeveloper.beathub.music.domain.Commit;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class CommitResDto {
    private Long id;
    private String title;
    private String introduction;
    private String createTime;
    private UserInfoDto author;
    private BucketDto bucket;
    private List<AudioSettingResDto> audioSettings;

    public static CommitResDto of(Commit commit) {
        CommitResDto commitResDto = new CommitResDto();
        commitResDto.id = commit.getId();
        commitResDto.title = commit.getTitle();
        commitResDto.introduction = commit.getIntroduction();
        commitResDto.createTime = commit.getCreateTime().toString();
        commitResDto.author = UserInfoDto.ofUser(commit.getAuthor());
        commitResDto.bucket = BucketDto.of(commit.getBucket());
        commitResDto.audioSettings = AudioSettingResDto.of(commit.getAudioSettings());
        return commitResDto;
    }

    public static List<CommitResDto> of(List<Commit> commits) {
        return commits.stream().map(CommitResDto::of).collect(Collectors.toList());
    }
}
