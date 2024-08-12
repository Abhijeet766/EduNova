package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import com.example.demo.entities.Trainer;


public interface TrainerService {
	List<Trainer> getAllTrainers();
    Optional<Trainer> getTrainerById(Long id);
    Trainer createTrainer(Trainer trainer);
    void deleteTrainer(Long id);
}
