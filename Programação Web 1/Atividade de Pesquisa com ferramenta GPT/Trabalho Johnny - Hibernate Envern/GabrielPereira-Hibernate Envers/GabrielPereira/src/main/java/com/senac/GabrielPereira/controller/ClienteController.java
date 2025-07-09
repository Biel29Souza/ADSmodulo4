package com.senac.GabrielPereira.controller;

import com.senac.GabrielPereira.entity.Cliente;
import com.senac.GabrielPereira.repository.ClienteRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteController {
    private final ClienteRepository clienteRepository;

    public ClienteController(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    @PostMapping
    public Cliente criar(@RequestBody Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @PutMapping("/{id}")
    public Cliente atualizar(@PathVariable Long id, @RequestBody Cliente dados) {
        Cliente existente = clienteRepository.findById(id).orElseThrow();
        existente.setNome(dados.getNome());
        existente.setEmail(dados.getEmail());
        return clienteRepository.save(existente);
    }

    @GetMapping
    public List<Cliente> listar() {
        return clienteRepository.findAll();
    }
}
