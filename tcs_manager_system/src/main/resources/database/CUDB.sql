/* CUDB stands for "Casos de Uso Data Base" */
CREATE DATABASE IF NOT EXISTS CUDB;


/* Creacion de tabla para caso de pruebas */
CREATE TABLE IF NOT EXISTS caso_pruebas (
  caso_pruebas_id BIGINT(20) NOT NULL AUTO_INCREMENT,
  defectos_desviaciones VARCHAR(150) NOT NULL,
  habilitado BIT(1) DEFAULT NULL,
  fecha_ejecucion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  observaciones VARCHAR(150) NOT NULL,
  postcondiciones VARCHAR(150) NOT NULL,
  precondiciones VARCHAR(150) NOT NULL,
  modulo_sistema VARCHAR(80) NOT NULL,
  description_caso_uso VARCHAR(150) NOT NULL,
  nombre_caso_uso VARCHAR(40) NOT NULL,
  version_caso_uso VARCHAR(20) NOT NULL,
  pasos_prueba VARCHAR(150) NOT NULL,
  fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  veredicto VARCHAR(100)  NOT NULL,
  user_id BIGINT(20) NOT NULL,

  PRIMARY KEY (caso_pruebas_id),
  FOREIGN KEY (user_id) REFERENCES usuario (usuario_id)
) engine=InnoDB;


/* Join table entre caso caso_pruebas y probador (Many to Many relationship)*/
CREATE TABLE IF NOT EXISTS caso_pruebas_testers (
  test_case_id BIGINT(20) NOT NULL,
  tester_id BIGINT(20) NOT NULL

  FOREIGN KEY (tester_id) REFERENCES probador (probador_id),
  FOREIGN KEY (test_case_id) REFERENCES caso_pruebas (caso_pruebas_id)
) engine=InnoDB;


/* Creacion de tabla para elemetos de prueba dentro de los caso de uso */
CREATE TABLE IF NOT EXISTS elemento_prueba (
  elemento_prueba_id BIGINT(20) NOT NULL AUTO_INCREMENT,
  respuesta_esperada VARCHAR(150) NOT NULL,
  campo VARCHAR(150) NOT NULL,
  coincidencia ENUM("COINCIDE", "NO COINCIDE"),
  tipo_escenario VARCHAR(150) NOT NULL,
  respuesta_sistema VARCHAR(150) NOT NULL,
  fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  valor VARCHAR(150) NOT NULL,
  test_case_caso_pruebas_id BIGINT(20) DEFAULT NULL,

  PRIMARY KEY (elemento_prueba_id),
  FOREIGN KEY (test_case_id) REFERENCES caso_pruebas (caso_pruebas_id)
) engine=InnoDB;


/* Creacion de tabla para almacenamiento de los testers de los casos de prueba */
CREATE TABLE IF NOT EXISTS probador (
  probador_id BIGINT(20) NOT NULL AUTO_INCREMENT,
  primer_nombre VARCHAR(20) NOT NULL,
  apellido_materno VARCHAR(20) DEFAULT NULL,
  apellido_paterno VARCHAR(20) NOT NULL,
  segundo_nombre VARCHAR(20) DEFAULT NULL,
  firma VARCHAR(20) DEFAULT NULL,
  fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (probador_id)
) engine=InnoDB;


/* Creacion de tabla para almacenamiento de usuario */
CREATE TABLE IF NOT EXISTS usuario (
  usuario_id BIGINT(20) NOT NULL AUTO_INCREMENT,
  primer_nombre VARCHAR(20) NOT NULL,
  apellido_materno VARCHAR(20) DEFAULT NULL,
  contrasena_usuario VARCHAR(50) NOT NULL,
  apellido_paterno VARCHAR(20) NOT NULL,
  segundo_nombre VARCHAR(20) DEFAULT NULL,
  fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  nombre_usuario VARCHAR(20) NOT NULL,

  PRIMARY KEY (usuario_id)
) engine=InnoDB;
