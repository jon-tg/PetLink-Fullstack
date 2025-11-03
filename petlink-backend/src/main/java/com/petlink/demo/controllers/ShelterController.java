package com.petlink.demo.controllers;

import com.petlink.demo.models.Shelter;
import com.petlink.demo.models.LoginRequest;
import com.petlink.demo.repositories.ShelterRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.*;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/shelters")
public class ShelterController {
    private final ShelterRepository repo;
    private final PasswordEncoder passwordEncoder;

    public ShelterController(ShelterRepository repo, PasswordEncoder passwordEncoder) { 
        this.repo = repo; 
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping
    public List<Shelter> list() { return repo.findAll(); }

   @PostMapping("/add")
    public ResponseEntity<?> create(@RequestBody Shelter s) {
        if (repo.findByEmail(s.getEmail()).isPresent()) { 
            return ResponseEntity
                .status(HttpStatus.CONFLICT) // 409 Conflict
                .body(Map.of("message", "Email already in use"));
            }
        
        s.setPassword(passwordEncoder.encode(s.getPassword()));
        repo.save(s);

        Map<String, Object> response = Map.of("message", "User created successfully");
        return ResponseEntity.status(HttpStatus.CREATED).body(response); //201
    }
    }

