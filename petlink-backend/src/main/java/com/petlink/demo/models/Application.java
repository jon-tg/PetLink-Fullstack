package com.petlink.demo.models;

public class Application {
    private int userId;
    private int petId;

    public Application(int userId, int petId) {
        this.userId = userId;
        this.petId = petId;
    }

    public int getUserId() {
        return this.userId;
    }
    
    public int getPetId() {
        return this.petId;
    }
}