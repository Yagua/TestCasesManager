package com.proyectoIntegrador.proyecto_iv.exception;

public class TestCaseNotFoundException extends Exception {

    public TestCaseNotFoundException() {
        super();
    }

    public TestCaseNotFoundException(String message) {
        super(message);
    }

    public TestCaseNotFoundException(Throwable cause) {
        super(cause);
    }

    public TestCaseNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public TestCaseNotFoundException(String message, Throwable cause,
            boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}
