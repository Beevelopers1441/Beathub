package com.beeveloper.beathub.post.dto.response;

import com.beeveloper.beathub.band.domain.Band;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class BandPostResDto {
    private Long id;

    private String title;

    private String content;

    private boolean isRecruiting;

    private LocalDateTime createTime;

    public BandPostResDto(Band band) {

    }
}
