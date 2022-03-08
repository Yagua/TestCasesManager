package com.proyectoIntegrador.proyecto_iv.entity;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

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
    @Column(name = "caso_pruebas_id")
    private long testCaseId;

    @JsonBackReference
    @ManyToOne(
        cascade = CascadeType.ALL,
        fetch = FetchType.LAZY,
        optional = false
    )
    @JoinColumn(name = "user_id")
    private User user;

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
    private String testCaseDescription;

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

    //unidirectional TestCase -> Tester relationship
    @ManyToMany(
        cascade = CascadeType.ALL,
        fetch = FetchType.LAZY
    )
    @JoinTable(
        joinColumns = @JoinColumn(name = "test_case_id"),
        inverseJoinColumns = @JoinColumn(name = "tester_id")
    )
    private List<Tester> testers = new ArrayList<>();

    //unidirectional TestCase -> TestElements relationship
    @OneToMany(
        cascade = CascadeType.ALL,
        fetch = FetchType.LAZY,
        orphanRemoval = true
    )
    @JoinColumn(name = "test_case_id")
    private List<TestElement> testElements = new ArrayList<>();

    @Column(
        name = "fecha_creacion",
        nullable = true,
        columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
    )
    private Date timeStamp;
}
