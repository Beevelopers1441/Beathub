package com.beeveloper.beathub.user.domain.dto.response;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.domain.BandMember;
import com.beeveloper.beathub.band.domain.Status;
import com.beeveloper.beathub.common.dto.*;
import com.beeveloper.beathub.music.domain.Commit;
import com.beeveloper.beathub.post.domain.Comment;
import com.beeveloper.beathub.post.domain.MemberPost;
import com.beeveloper.beathub.post.dto.response.MemberPostResDto;
import com.beeveloper.beathub.user.domain.User;
import com.beeveloper.beathub.user.domain.UserInstrument;
import lombok.Getter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Getter
public class UserProfileResDto {

    private Long id;

    private String name;

    private String email;

    private String imageUrl;

    private String introduction;

    private List<BandDto> leadingBands;

    private List<BandMemberDto> participatingBands;
    
    private List<BandDto> followBands;

    private List<UserInstrumentDto> instruments;

//    private List<Map<String, Object>> posts;

//    private List<Map<String, Object>> likePosts;

//    private List<Map<String, Object>> comments;

    private List<CommitDto> commits;

    private UserInfoDto followers;

    private UserInfoDto followings;

    public static UserProfileResDto of(User user) {
        UserProfileResDto userProfileResDto = new UserProfileResDto();
        userProfileResDto.id = user.getId();
        userProfileResDto.name = user.getName();
        userProfileResDto.email = user.getEmail();
        userProfileResDto.imageUrl = user.getImageUrl();
        userProfileResDto.introduction = user.getIntroduction();
        userProfileResDto.followings = UserInfoDto.ofUser(user.getUserFollowing());
        userProfileResDto.followers = UserInfoDto.ofUser(user.getUserFollower());
        userProfileResDto.instruments = UserInstrumentDto.of(user.getInstruments());
        userProfileResDto.leadingBands = BandDto.of(user.getLeadingBands());
        userProfileResDto.followBands = BandDto.of(user.getFollowBands());
        userProfileResDto.participatingBands = BandMemberDto.of(user.getParticipatingBands());
        userProfileResDto.commits = CommitDto.of(user.getCommits());

        return userProfileResDto;
    }

    public static List<UserProfileResDto> of(List<User> users) {
        return users.stream().map(UserProfileResDto::of).collect(Collectors.toList());
    }
}
