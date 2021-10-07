package com.beeveloper.beathub.band.exception;

public class NotFoundBand extends NullPointerException{
    public NotFoundBand() { super("존재하지 않는 밴드입니다.");}
}
