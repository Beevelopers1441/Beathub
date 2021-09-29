package com.beeveloper.beathub.band.dto.ressponse;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.domain.BandMember;
import com.beeveloper.beathub.band.domain.Status;
import com.beeveloper.beathub.common.dto.BandDto;
import com.beeveloper.beathub.common.dto.BandMemberForMemberDto;
import com.beeveloper.beathub.common.dto.BucketDto;
import com.beeveloper.beathub.common.dto.UserInfoDto;
import com.beeveloper.beathub.post.dto.response.BandPostResDto;
import com.beeveloper.beathub.user.domain.User;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class BandResDto {
    private BandDto band;
    private UserInfoDto leader;
    private List<UserInfoDto> members;
    private List<UserInfoDto> followers;
    private List<BucketDto> buckets;
    private List<BandPostResDto> posts;


    public static BandResDto of(Band band) {
        BandResDto dto = new BandResDto();
        dto.band = BandDto.of(band);
        dto.leader = UserInfoDto.ofUser(band.getLeader());
        // bandMember 분기처리 Approved 된 사람들만
        List<BandMember> members = band.getMembers();
        List<User> approvedMembers = new ArrayList<>();
        for (BandMember member : members) {
            if (member.getStatus().equals(Status.Approved)) {
                approvedMembers.add(member.getUser());
            }
        }
        dto.members = UserInfoDto.ofUser(approvedMembers);
        dto.followers = UserInfoDto.ofUser(band.getFollowers());
        dto.buckets = BucketDto.of(band.getBuckets());
        dto.posts = BandPostResDto.of(band.getBandPosts());
        return dto;
    }

    public static List<BandResDto> of(List<Band> bands) {
        return bands.stream().map(BandResDto::of).collect(Collectors.toList());
    }

}
