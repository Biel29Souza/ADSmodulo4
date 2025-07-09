package com.senac.GabrielPereira.repository;

import com.senac.GabrielPereira.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {}