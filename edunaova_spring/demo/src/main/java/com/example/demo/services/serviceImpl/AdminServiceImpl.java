package com.example.demo.services.serviceImpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Admin;
import com.example.demo.repo.AdminRepository;
import com.example.demo.services.AdminService;

import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService{

	 @Autowired
	    private AdminRepository adminRepository;
	 
	 
	@Override
	public List<Admin> getAllAdmins() {
		return adminRepository.findAll();
	}

	@Override
	public Optional<Admin> getAdminById(Long id) {
		return adminRepository.findById(id);
	}

	@Override
	public Admin createAdmin(Admin admin) {
	     return adminRepository.save(admin);
	}

	@Override
	public void deleteAdmin(Long id) {
	    adminRepository.deleteById(id);
		
	}

	
}
