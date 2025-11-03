package com.petlink.demo.models;

import java.util.*;
import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Column(length = 50, nullable = false)
    private String name;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int userID;

    @Column(length = 50, nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    public User() {}
    
    // Create a new user
    public User(String email, String password, String name) {
        this.email = email;
        this.password = password;
        this.name = name;
    }

    public int getID() {
        return this.userID;
    }

    public void setID(int id) {
        this.userID = id;
    }

    public String getEmail() {
        return this.email;
    }

    public String getName() {
        return this.name;
    }

    public String getPassword() {
        return this.password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}