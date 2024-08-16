package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import com.example.demo.entities.Trainer;

public interface TrainerService {
    Trainer createTrainer(Trainer trainer);
    Optional<Trainer> getTrainerById(int id);
    Trainer updateTrainer(Trainer trainer);
    void deleteTrainer(int id);
    public List<Trainer> getAllTrainers();
}