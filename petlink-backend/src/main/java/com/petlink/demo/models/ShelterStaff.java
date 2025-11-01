package com.petlink.demo.models;

public class ShelterStaff extends User {
    private int parentShelterID;

    public ShelterStaff(String email, String password, String name, int shelterID) {
        super(email, password, name);
        this.parentShelterID = shelterID;
    }

    public int getParentShelterID() {
        return this.parentShelterID;
    }
}