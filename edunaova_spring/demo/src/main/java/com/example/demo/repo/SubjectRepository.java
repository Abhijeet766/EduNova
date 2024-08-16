package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Integer> {

}
