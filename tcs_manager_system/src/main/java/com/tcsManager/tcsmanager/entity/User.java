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
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * User
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "usuario")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "usuario_id")
    private long userId;

    @Column(name = "primer_nombre", nullable =  false, length = 40)
    private String firstName;

    @Column(name = "segundo_nombre", nullable = true, length = 40)
    private String secondName;

    @Column(name = "apellido_paterno", nullable = false, length = 40)
    private String paternalLastName;

    @Column(name = "apellido_materno", nullable = true, length = 40)
    private String maternalLastName;

    @Column(
        name = "nombre_usuario",
        nullable = false, length = 20,
        unique =  true
    )
    private String userName;

    @Column(name = "contrasena_usuario", nullable = false)
    private String password;

    @Column(
        name = "fecha_creacion",
        nullable = true,
        columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
    )
    private Date timeStamp;

    @OneToMany(
        cascade = CascadeType.ALL,
        fetch = FetchType.LAZY,
        mappedBy = "user"
        // orphanRemoval = true
    )
    private List<TestCase> testCases = new ArrayList<>();
}
