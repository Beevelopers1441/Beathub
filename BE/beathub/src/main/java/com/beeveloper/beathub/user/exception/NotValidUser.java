package com.beeveloper.beathub.user.exception;

public class NotValidUser extends RuntimeException{
    public NotValidUser() { super("허가되지 않은 사용자입니다.");}
}
