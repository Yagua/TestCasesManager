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
    private long id;

    @Column(name = "primer_nombre", nullable =  false, length = 40)
    private String firstName;

    @Column(name = "segundo_nombre", nullable = true, length = 40)
    private String secondName;

    @Column(name = "apellido_paterno", nullable = false, length = 40)
    private String paternalLastName;

    @Column(name = "apellido_materno", nullable = true, length = 40)
    private String maternalLastName;

    @Column(name = "nombre_usuario", nullable = false, length = 20)
    private String userName;

    @Column(name = "contrasena_usuario", nullable = false)
    private String password;

    @Column(
        name = "fecha_creacion",
        nullable = true,
        columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
    )
    private Date timeStamp;

    // @OneToMany(cascade = CascadeType.ALL, mappedBy = "usuario")
    // @JoinColumn(name = "user_id", referencedColumnName = "id")
    // private List<String> caseTests;
}
