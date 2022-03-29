package com.tcsManager.tcsmanager.entity;

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
        cascade = {CascadeType.PERSIST, CascadeType.MERGE},
        fetch = FetchType.LAZY,
        optional = false
    )
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "nombre_caso_uso", nullable = false, length = 40)
    private String testCaseName;

    @Column(name = "version_caso_uso", nullable = false, length = 20)
    private String testCaseVersion;

    @Column(
        name = "fecha_ejecucion",
        nullable = true,
        columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
    )
    private Date executionDate;

    @Column(name = "modulo_sistema", nullable = false, length = 80)
    private String systemModule;

    @Column(name = "description_caso_uso", nullable = false, length = 150)
    private String testCaseDescription;

    @Column(name = "precondiciones", nullable = false, length = 150)
    private String preconditions;

    @Column(name = "pasos_prueba", nullable = false, length = 150)
    private String testSteps;

    @Column(name = "postcondiciones", nullable = false, length = 150)
    private String postconditions;

    @Column(name = "defectos_desviaciones", nullable = false, length = 150)
    private String defectsAndDesviations;

    @Column(name = "veredicto", nullable = false, length = 100)
    private String veredict;

    @Column(name = "observaciones", nullable = false, length = 150)
    private String observations;

    //unidirectional TestCase -> Tester relationship
    @ManyToMany(
        cascade = CascadeType.ALL,
        fetch = FetchType.LAZY
    )
    @JoinTable(
        joinColumns = @JoinColumn(name = "test_case_id", nullable = false),
        inverseJoinColumns = @JoinColumn(name = "tester_id", nullable = false)
    )
    private List<Tester> testers = new ArrayList<>();

    //bidirectional TestCase -> TestElements relationship
    @OneToMany(
        cascade = CascadeType.ALL,
        fetch = FetchType.LAZY,
        mappedBy = "testCase"
        // orphanRemoval = true
    )
    private List<TestElement> testElements = new ArrayList<>();

    @Column(name = "habilitado")
    private boolean enabled = true;

    @Column(
        name = "fecha_creacion",
        nullable = true,
        columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
    )
    private Date timeStamp;
}
