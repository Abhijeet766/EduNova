package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
//jpa repo replaces dao layer
}
