package com.example.demo.services;


import java.util.Optional;

import com.example.demo.entities.Admin;

public interface AdminService {
    Admin createAdmin(Admin admin);
    Optional<Admin> getAdminById(int id);
    Admin updateAdmin(Admin admin);
    void deleteAdmin(int id);
}
