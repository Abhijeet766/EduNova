package com.example.demo.services;

import java.util.Optional;

import com.example.demo.entities.User;

public interface UserService {
    User  createUser(User user);
    Optional<User> getUserById(int id);
    User updateUser(User user);
    void deleteUser(int id);
}