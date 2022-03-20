package com.tcsManager.tcsmanager.exception;

/**
 * TesterNotFoundException
 */

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
