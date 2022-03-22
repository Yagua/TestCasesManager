package com.tcsManager.tcsmanager.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * TestElementNotFoundException
 */

@ResponseStatus(HttpStatus.NOT_FOUND)
public class TestElementNotFoundException extends Exception {

    public TestElementNotFoundException() {
        super();
    }

    public TestElementNotFoundException(String message) {
        super(message);
    }

    public TestElementNotFoundException(Throwable cause) {
        super(cause);
    }

    public TestElementNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public TestElementNotFoundException(String message, Throwable cause, boolean enableSuppression,
            boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
