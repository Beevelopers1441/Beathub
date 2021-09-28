package com.beeveloper.beathub.post.dto.response;

import com.beeveloper.beathub.common.dto.UserInfoDto;
import com.beeveloper.beathub.post.domain.Comment;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
@ApiModel("댓글 응답 정보")
public class CommentResDto {

    @ApiModelProperty(name="댓글 id", example = "1")
    private Long id;

    @ApiModelProperty(name="내용", example = "내용")
    private String content;

    @ApiModelProperty(name="구인글 id", example = "1")
    private LocalDateTime createTime;

    private UserInfoDto author;

    public static CommentResDto of(Comment comment) {
        CommentResDto commentResDto = new CommentResDto();
        commentResDto.id = comment.getId();
        commentResDto.content = comment.getContent();
        commentResDto.createTime = comment.getCreateTime();
        commentResDto.author = UserInfoDto.ofUser(comment.getAuthor());

        return commentResDto;
    }

    public static List<CommentResDto> of(List<Comment> comments) {
        return comments.stream().map(CommentResDto::of).collect(Collectors.toList());
    }
}
