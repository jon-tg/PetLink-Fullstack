package com.petlink.demo.models;

import java.util.*;
import jakarta.persistence.*;

@Entity
@Table(name = "shelters")
public class Shelter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int shelterID;

    @Column(length = 50)
    private String name;

    @Column(length = 50)
    private String email;

    @Column(length = 50)
    private String address;

    @Column(length = 50)
    private String state;

    @Column(length = 50)
    private String password;

    public Shelter() {
    }

    public Shelter(int id, String name, String email, String address, String state, String password) {
        this.shelterID = id;
        this.name = name;
        this.address = address;
        this.state = state;
        this.email = email;
        this.password = password;
    }
    
    public int getShelterID(){
        return this.shelterID;
    }

    public String getName() {
        return this.name;
    }

    public String getAddress() {
        return this.address;
    }

    public String getState() {
        return this.state;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setState(String state) {
        this.state = state;
    }

}