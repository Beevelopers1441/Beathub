package com.beeveloper.beathub.user.domain.dto.response;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.domain.BandMember;
import com.beeveloper.beathub.band.domain.Status;
import com.beeveloper.beathub.common.dto.*;
import com.beeveloper.beathub.user.domain.User;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class UserProfileResDto {

    private Long id;

    private String name;

    private String email;

    private String imageUrl;

    private String introduction;

    private List<BandDto> leadingBands;

    private List<BandDto> participatingBands;
    
    private List<BandDto> followBands;

    private List<UserInstrumentDto> instruments;

//    private List<Map<String, Object>> posts;

//    private List<Map<String, Object>> likePosts;

//    private List<Map<String, Object>> comments;

    private List<CommitDto> commits;

    private List<UserInfoDto> followers;

    private List<UserInfoDto> followings;

    public static UserProfileResDto of(User user) {
        UserProfileResDto userProfileResDto = new UserProfileResDto();
        userProfileResDto.id = user.getId();
        userProfileResDto.name = user.getName();
        userProfileResDto.email = user.getEmail();
        userProfileResDto.imageUrl = user.getImageUrl();
        userProfileResDto.introduction = user.getIntroduction();


        userProfileResDto.instruments = UserInstrumentDto.of(user.getInstruments());
        userProfileResDto.leadingBands = BandDto.of(user.getLeadingBands());
        userProfileResDto.followBands = BandDto.of(user.getFollowBands());
        // 참여하고 있는 밴드의 상태가 approved 인지 확인
        List<BandMember> participatingBands = user.getParticipatingBands();
        List<Band> approvedBands = new ArrayList<>();
        for (BandMember bandMember : participatingBands) {
            if (bandMember.getStatus().equals(Status.Approved)) {
                approvedBands.add(bandMember.getBand());
            }
        }
        userProfileResDto.participatingBands = BandDto.of(approvedBands);
        userProfileResDto.commits = CommitDto.of(user.getCommits());

        return userProfileResDto;
    }

    public static List<UserProfileResDto> of(List<User> users) {
        return users.stream().map(UserProfileResDto::of).collect(Collectors.toList());
    }
}
