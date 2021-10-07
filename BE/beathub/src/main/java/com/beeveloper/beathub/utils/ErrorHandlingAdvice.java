package com.beeveloper.beathub.utils;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ErrorHandlingAdvice {

    @ExceptionHandler
    public ResponseEntity nullPointHandler(NullPointerException e) {
        return ResponseEntity.status(404).body(new ErrorMessage(e.getMessage()));
    }

    @ExceptionHandler
    public ResponseEntity nullHandler(RuntimeException e) {
        return ResponseEntity.status(404).body(e.getMessage());
    }

}
