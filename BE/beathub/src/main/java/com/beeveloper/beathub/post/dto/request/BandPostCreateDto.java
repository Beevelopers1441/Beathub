package com.beeveloper.beathub.post.dto.request;

import com.beeveloper.beathub.band.domain.Band;
import com.beeveloper.beathub.band.repository.BandRepository;
import com.beeveloper.beathub.instrument.domain.Instrument;
import com.beeveloper.beathub.instrument.repository.InstrumentRepository;
import com.beeveloper.beathub.user.domain.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
@ApiModel("밴드 구인글 생성 정보")
public class BandPostCreateDto {

    @ApiModelProperty(name = "밴드명", example = "기러기밴드")
    private Band band;

    @ApiModelProperty(name = "구인글 이름", example = "기타 찾습니다.")
    private String title;

    @ApiModelProperty(name = "구인글 내용", example = "활동지역은 XX, 매주 XX회 정기적으로 연습합니다.")
    private String content;

    @ApiModelProperty(name = "찾는 악기 이름", example = "기타")
    private Instrument tag;

    public BandPostCreateDto(
            Band band,
            String title,
            String content,
            Instrument tag
    ) {
        this.band = band;
        this.title = title;
        this.content = content;
        this.tag = tag;
    }
}
