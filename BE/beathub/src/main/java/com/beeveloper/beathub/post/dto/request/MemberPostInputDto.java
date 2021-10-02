package com.beeveloper.beathub.post.dto.request;

import com.beeveloper.beathub.user.domain.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Getter
@ApiModel("개인 구인글 생성 정보")
@NoArgsConstructor
@Component
public class MemberPostInputDto {


    @ApiModelProperty(name = "구인글 제목", example = "제목입니다.")
    private String title;

    @ApiModelProperty(name = "구인글 내용", example = "내용입니다.")
    private String content;

    @ApiModelProperty(name = "원하는 악기", example = "드럼")
    private String tag;
}