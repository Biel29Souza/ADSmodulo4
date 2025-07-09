package com.senac.GabrielPereira.revisao;

import org.hibernate.envers.RevisionListener;

public class OuvinteRevisao implements RevisionListener {

    @Override
    public void newRevision(Object revisionEntity) {
        RevisaoPersonalizada revisao = (RevisaoPersonalizada) revisionEntity;
        revisao.setUsuario("gabriel"); // Simulação de usuário logado
    }
}