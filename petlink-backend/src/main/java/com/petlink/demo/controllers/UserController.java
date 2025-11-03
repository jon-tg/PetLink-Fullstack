package com.petlink.demo.controllers;

import com.petlink.demo.models.User;
import com.petlink.demo.models.LoginRequest;
import com.petlink.demo.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.*;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepository repo;
    private final PasswordEncoder passwordEncoder;

    public UserController(UserRepository repo, PasswordEncoder passwordEncoder) { 
        this.repo = repo; 
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping
    public List<User> list() { return repo.findAll(); }

    @PostMapping("/add")
    public ResponseEntity<?> create(@RequestBody User u) {
        if (repo.findByEmail(u.getEmail()).isPresent()) { 
            return ResponseEntity
                .status(HttpStatus.CONFLICT) // 409 Conflict
                .body(Map.of("message", "Email already in use"));
        }
        u.setPassword(passwordEncoder.encode(u.getPassword()));
        repo.save(u);

        Map<String, Object> response = Map.of("message", "User created successfully");
        return ResponseEntity.status(HttpStatus.CREATED).body(response); //201
    }


    }

