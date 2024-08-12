package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Trainer;

public interface TrainerRepository extends JpaRepository<Trainer, Long> {

}
