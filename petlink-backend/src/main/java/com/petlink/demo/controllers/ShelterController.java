package com.petlink.demo.controllers;

import com.petlink.demo.models.Shelter;
import com.petlink.demo.repositories.ShelterRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/shelters")
public class ShelterController {
    private final ShelterRepository repo;

    public ShelterController(ShelterRepository repo) { this.repo = repo; }

    @GetMapping
    public List<Shelter> list() { return repo.findAll(); }

    @PostMapping("/add")
    public Shelter create(@RequestBody Shelter s) {
        if (repo.findByAddress(s.getAddress()).isEmpty() && repo.findByEmail(s.getEmail()).isEmpty()) { return repo.save(s); }
        else {return null;}
    }

}
