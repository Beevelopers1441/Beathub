package com.beeveloper.beathub.common.dto;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.music.domain.Audio;
import com.beeveloper.beathub.music.domain.Bucket;
import com.beeveloper.beathub.user.domain.User;
import lombok.Getter;

import java.util.List;

@Getter
public class SearchResponseDto {

    private List<UserInfoDto> userList;

    private List<BandDto> bandList;

    private List<AudioDto> audioList;

    private List<BucketDto> bucketList;

    public static SearchResponseDto of(
            List<User> userList,
            List<Band> bandList,
            List<Audio> audioList,
            List<Bucket> bucketList) {
        SearchResponseDto dto = new SearchResponseDto();
        dto.userList = UserInfoDto.ofUser(userList);
        dto.bandList = BandDto.of(bandList);
        dto.audioList = AudioDto.of(audioList);
        dto.bucketList = BucketDto.of(bucketList);
        return dto;
    }
}
