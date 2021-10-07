package com.beeveloper.beathub.music.exception;

public class NotFoundAudio extends NullPointerException{
    public NotFoundAudio() { super("존재하지 않는 오디오입니다.");}
}
