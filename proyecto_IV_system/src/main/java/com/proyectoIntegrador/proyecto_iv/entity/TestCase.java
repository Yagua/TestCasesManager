package com.proyectoIntegrador.proyecto_iv.entity;

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
 * TestCase
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "caso_pruebas")
public class TestCase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    // @ManyToOne(
    //     cascade = CascadeType.ALL,
    //     fetch = FetchType.LAZY,
    //     optional = false
    // )
    // private User user;

    @Column(name = "nombre_caso_uso", nullable = false, length = 100)
    private String testCaseName;

    @Column(name = "version_caso_uso", nullable = false, length = 80)
    private String testCaseVersion;

    @Column(
        name = "fecha_ejecucion",
        nullable = true,
        columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
    )
    private Date executionDate;

    @Column(name = "modulo_sistema", nullable = false)
    private String systemModule;

    @Column(name = "description_caso_uso", nullable = false)
    private String testCasoDescription;

    @Column(name = "precondiciones", nullable = false)
    private String preconditions;

    @Column(name = "pasos_prueba", nullable = false)
    private String testSteps;

    @Column(name = "postcondiciones", nullable = false)
    private String postconditions;

    @Column(name = "defectos_desviaciones", nullable = false)
    private String defectsAndDesviations;

    @Column(name = "veredicto", nullable = false)
    private String veredict;

    @Column(name = "observaciones", nullable = false)
    private String observations;

    // @ManyToMany
    // private List<Tester> testers;

    @Column(
        name = "fecha_creacion",
        nullable = true,
        columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
    )
    private Date timeStamp;
}
