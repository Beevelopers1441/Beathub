package com.beeveloper.beathub.user.exception;


public class NotFoundUser extends NullPointerException{
    public NotFoundUser() { super("해당 유저를 찾을 수 없습니다.");}
}
