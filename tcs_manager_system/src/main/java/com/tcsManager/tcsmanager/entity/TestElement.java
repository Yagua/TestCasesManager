package com.tcsManager.tcsmanager.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TestElement
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "elemento_prueba")
public class TestElement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "elemento_prueba_id")
    private long testElementId;

    @Column(name = "campo", nullable = false, length = 150)
    private String field;

    @Column(name = "valor", nullable = false, length = 150)
    private String value;

    @Column(name = "tipo_escenario", nullable = false, length = 150)
    private String scenario;

    @Column(name = "respuesta_esperada", nullable = false, length = 150)
    private String expectedResponse;

    @Column(name = "coincidencia", nullable = false, length = 150)
    private boolean matching;

    @Column(name = "respuesta_sistema", nullable = false, length = 150)
    private String systemResponse;

    @Column(
        name = "fecha_creacion",
        nullable = true,
        columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
    )
    private Date timeStamp;
}
