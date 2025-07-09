package com.senac.GabrielPereira.revisao;

import org.hibernate.envers.DefaultRevisionEntity;
import org.hibernate.envers.RevisionEntity;
import jakarta.persistence.Entity;

@Entity
@RevisionEntity(OuvinteRevisao.class)
public class RevisaoPersonalizada extends DefaultRevisionEntity {
    private String usuario;

    public String getUsuario() { return usuario; }
    public void setUsuario(String usuario) { this.usuario = usuario; }
}