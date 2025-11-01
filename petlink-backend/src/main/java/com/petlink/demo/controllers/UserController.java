package com.petlink.demo.controllers;

import com.petlink.demo.models.User;
import com.petlink.demo.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepository repo;

    public UserController(UserRepository repo) { this.repo = repo; }

    @GetMapping
    public List<User> list() { return repo.findAll(); }

    @PostMapping
    public User create(@RequestBody User u) {
        if (repo.findByEmail(u.getEmail()).isEmpty()) { return repo.save(u); }
        else {return null;}
    }

}
