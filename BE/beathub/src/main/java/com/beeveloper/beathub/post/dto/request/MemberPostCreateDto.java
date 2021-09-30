package com.beeveloper.beathub.post.dto.request;

import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.instrument.repository.InstrumentRepository;
import com.beeveloper.beathub.user.domain.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Getter
@ApiModel("개인 구인글 생성 정보")
@RequiredArgsConstructor
@Component
public class MemberPostCreateDto {


    public MemberPostCreateDto(
            User user,
            String title,
            String content,
            Instrument tag
    ) {
        this.user = user;
        this.title = title;
        this.content = content;
        this.tag = tag;
    }

    @ApiModelProperty(name = "작성자", example = "홍길동")
    private User user;

    @ApiModelProperty(name = "구인글 제목", example = "제목입니다.")
    private String title;

    @ApiModelProperty(name = "구인글 내용", example = "내용입니다.")
    private String content;

    @ApiModelProperty(name = "원하는 악기", example = "기타")
    private Instrument tag;
}
