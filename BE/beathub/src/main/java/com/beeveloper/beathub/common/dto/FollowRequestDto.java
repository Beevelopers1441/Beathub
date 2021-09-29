package com.beeveloper.beathub.common.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
public class FollowRequestDto {

    @ApiModelProperty(value = "팔로우 할 사람 or 밴드의 Id", example = "1")
    private Long id;
}
