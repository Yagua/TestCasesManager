/* create sereval (basics) store procedures */
USE CUDB;

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS show_test_cases()
BEGIN
  SELECT * FROM CUDB.caso_pruebas;
END //

CREATE PROCEDURE IF NOT EXISTS show_users()
BEGIN
  SELECT * FROM CUDB.usuario;
END //

CREATE PROCEDURE IF NOT EXISTS show_testers()
BEGIN
  SELECT * FROM CUDB.probador;
END //

CREATE PROCEDURE IF NOT EXISTS show_test_elements()
BEGIN
  SELECT * FROM CUDB.elemento_prueba;
END //

DELIMITER ;
