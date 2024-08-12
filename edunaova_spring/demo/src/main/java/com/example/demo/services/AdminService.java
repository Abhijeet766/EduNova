package com.example.demo.services;



import java.util.List;
import java.util.Optional;

import com.example.demo.entities.Admin;


public interface AdminService {
	 List<Admin> getAllAdmins();
	    Optional<Admin> getAdminById(Long id);
	    Admin createAdmin(Admin admin);
	    void deleteAdmin(Long id);
}
