package com.beeveloper.beathub.band.dto.request;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.user.domain.User;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class BandCreateDto {

    @ApiModelProperty(name = "밴드명", example = "자우림")
    String name;

    @ApiModelProperty(name = "이미지 Url", example = "일단은이미지가 입력으로 들어오고 back에서 처리")
    String imageUrl;

    @ApiModelProperty(name = "밴드소개", example = "저희는 4인조밴드로 ROCK을 위주로합니다!")
    String introduction;

    User leader;

    LocalDateTime createTime;

    @Builder
    public BandCreateDto(
            String name,
            String imageUrl,
            String introduction,
            User leader
    ) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.introduction = introduction;
        this.leader = leader;
        this.createTime = LocalDateTime.now();
    }
}
