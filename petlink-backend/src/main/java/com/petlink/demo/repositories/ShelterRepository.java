package com.petlink.demo.repositories;

import com.petlink.demo.models.Shelter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface ShelterRepository extends JpaRepository<Shelter, Integer> {
    List<Shelter> findByName(String name);
    Optional<Shelter> findByEmail(String email);
    List<Shelter> findByAddress(String address);
    List<Shelter> findByState(String state);
}