package com.beeveloper.beathub.user.exception;

public class NotValidJWT extends RuntimeException{
    public NotValidJWT() {super( "유효하지 않은 토큰입니다.");}
}
