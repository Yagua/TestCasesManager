package com.tcsManager.tcsmanager.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * TesterNotFoundException
 */

@ResponseStatus(HttpStatus.NOT_FOUND)
public class TesterNotFoundException extends Exception {

    public TesterNotFoundException() {
        super();
    }

    public TesterNotFoundException(String message) {
        super(message);
    }

    public TesterNotFoundException(Throwable cause) {
        super(cause);
    }

    public TesterNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public TesterNotFoundException(String message, Throwable cause, boolean enableSuppression,
            boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}
