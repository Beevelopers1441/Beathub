package com.beeveloper.beathub.post.exception;

public class NotFoundPost extends NullPointerException{
    public NotFoundPost() {super("해당 게시물을 찾을 수 없습니다.");}
}
