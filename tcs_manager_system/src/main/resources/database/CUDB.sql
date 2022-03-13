/* CUDB stands for "Casos de Uso Data Base" */
CREATE DATABASE IF NOT EXISTS CUDB;


/* Creacion de tabla para caso de pruebas */
CREATE TABLE IF NOT EXISTS caso_pruebas (
  caso_pruebas_id BIGINT NOT NULL auto_increment,
  defectos_desviaciones TEXT NOT NULL,
  fecha_ejecucion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  observaciones TEXT NOT NULL,
  postcondiciones TEXT NOT NULL,
  precondiciones TEXT NOT NULL,
  modulo_sistema TEXT NOT NULL,
  description_caso_uso TEXT NOT NULL,
  nombre_caso_uso TEXT NOT NULL,
  version_caso_uso VARCHAR(60) NOT NULL,
  pasos_prueba TEXT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  veredicto TEXT NOT NULL,
  user_id BIGINT NOT NULL,

  PRIMARY KEY (caso_pruebas_id),
  FOREIGN KEY (user_id) REFERENCES usuario (usuario_id)
) engine=InnoDB;


/* Join table entre caso caso_pruebas y probador (Many to Many relationship)*/
CREATE TABLE IF NOT EXISTS caso_pruebas_testers (
  test_case_id BIGINT NOT NULL,
  tester_id BIGINT NOT NULL

  FOREIGN KEY (tester_id) REFERENCES probador (probador_id),
  FOREIGN KEY (test_case_id) REFERENCES caso_pruebas (caso_pruebas_id)
) engine=InnoDB;


/* Creacion de tabla para elemetos de prueba dentro de los caso de uso */
CREATE TABLE IF NOT EXISTS elemento_prueba (
  elemento_prueba_id BIGINT NOT NULL AUTO_INCREMENT,
  repuesta_esperada VARCHAR(200) NOT NULL,
  campo VARCHAR(200) NOT NULL,
  coincidencia ENUM("COINCIDE", "NO COINCIDE"),
  tipo_escenario VARCHAR(200) NOT NULL,
  respuesta_sistema VARCHAR(200) NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  valor VARCHAR(200) NOT NULL,
  test_case_id BIGINT NOT NULL,

  PRIMARY KEY (elemento_prueba_id),
  FOREIGN KEY (test_case_id) REFERENCES caso_pruebas (caso_pruebas_id)
) engine=InnoDB;


/* Creacion de tabla para almacenamiento de los testers de los casos de prueba */
CREATE TABLE IF NOT EXISTS probador (
  probador_id BIGINT NOT NULL AUTO_INCREMENT,
  primer_nombre VARCHAR(40) NOT NULL,
  apellido_materno VARCHAR(40) NOT NULL,
  apellido_paterno VARCHAR(40) NOT NULL,
  segundo_nombre VARCHAR(40) NOT NULL,
  firma VARCHAR(40) NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (probador_id)
) engine=InnoDB;


/* Creacion de tabla para almacenamiento de usuario */
CREATE TABLE IF NOT EXISTS usuario (
  usuario_id BIGINT NOT NULL AUTO_INCREMENT,
  primer_nombre VARCHAR(40) NOT NULL,
  apellido_materno VARCHAR(40) ,
  contrasena_usuario VARCHAR(255) NOT NULL,
  apellido_paterno VARCHAR(40) NOT NULL,
  segundo_nombre VARCHAR(40),
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  nombre_usuario VARCHAR(20) NOT NULL,

  PRIMARY KEY (usuario_id)
) engine=InnoDB;
