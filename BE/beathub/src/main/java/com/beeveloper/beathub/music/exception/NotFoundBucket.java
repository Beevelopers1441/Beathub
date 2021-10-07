package com.beeveloper.beathub.music.exception;

public class NotFoundBucket extends NullPointerException{
    public NotFoundBucket() { super("존재하지 않는 버킷입니다.");}
}
