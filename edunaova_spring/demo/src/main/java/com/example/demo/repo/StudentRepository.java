package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}
