package com.example.PostDoc.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
    private static final long serialVerisonUID = 1L;

    public ResourceNotFoundException(String message){
        super(message);
    }
}
