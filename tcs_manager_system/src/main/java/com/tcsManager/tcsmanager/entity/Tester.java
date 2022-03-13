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
 * Tester
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "probador")
public class Tester {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "probador_id")
    private long testerId;

    @Column(name = "primer_nombre", nullable =  false, length = 40)
    private String firstName;

    @Column(name = "segundo_nombre", nullable = true, length = 40)
    private String secondName;

    @Column(name = "apellido_paterno", nullable = false, length = 40)
    private String paternalLastName;

    @Column(name = "apellido_materno", nullable = true, length = 40)
    private String maternalLastName;

    @Column(name = "firma", nullable = true, length = 40)
    private String sing;

    @Column(
        name = "fecha_creacion",
        nullable = true,
        columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
    )
    private Date timeStamp;

}
