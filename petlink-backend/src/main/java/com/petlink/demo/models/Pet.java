package com.petlink.demo.models;

import jakarta.persistence.*;

@Entity
@Table(name = "pets")
public class Pet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int petID;

    @Column(length = 50)
    private String name;

    @Column(length = 50)
    private String species;

    @Column(length = 50)
    private String breed;

    private int age;

    @Column(length = 50)
    private String temperament;
    
    @Column(length = 10)
    private String status;

    @Column(name = "shelterId")
    private int shelterID;

    public Pet(int id, String name, String species, String breed, int age, String temperament, int shelterID) {
        this.petID = id;
        this.name = name;
        this.species = species;
        this.breed = breed;
        this.age = age;
        this.temperament = temperament;
        this.status = "Available";
        this.shelterID = shelterID;
    }

    public void changeName(String name) {
        this.name = name;
    }

    public void changeSpecies(String species) {
        this.species = species;
    }

    public void changeBreed(String breed) {
        this.breed = breed;
    }

    public void changeAge(int age) {
        this.age = age;
    }

    public void changeTemperament(String temperament) {
        this.temperament = temperament;
    }

    public void changeStatus(String status) {
        this.status = status;
    }

    public void changeShelterID(int shelterID) {
        this.shelterID = shelterID;
    }

    public int getID() {
        return this.petID;
    }

    public String getName() {
        return this.name;
    }

    public String getSpecies() {
        return this.species;
    }

    public String getBreed() {
        return this.breed;
    }

    public int getAge() {
        return this.age;
    }

    public String getTemperament() {
        return this.temperament;
    }

    public String getStatus() {
        return this.status;
    }

    public int getShelterID() {
        return this.shelterID;
    }

    public boolean isAvailable() {
        if (this.status.equalsIgnoreCase("Available")) return true;
        return false;
    }
}