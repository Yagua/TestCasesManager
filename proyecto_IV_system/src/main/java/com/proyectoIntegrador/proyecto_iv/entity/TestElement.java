package com.proyectoIntegrador.proyecto_iv.entity;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

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

    @Column(name = "campo")
    private String field;

    @Column(name = "valor")
    private String value;

    @Column(name = "tipo_escenario")
    private String scenario;

    @Column(name = "repuesta_esperada")
    private String expectedResponse;

    @Column(name = "coincidencia")
    private boolean matching;

    @Column(name = "respuesta_sistema")
    private String systemResponse;

    @Column(
        name = "fecha_creacion",
        nullable = true,
        columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
    )
    private Date timeStamp;
}
