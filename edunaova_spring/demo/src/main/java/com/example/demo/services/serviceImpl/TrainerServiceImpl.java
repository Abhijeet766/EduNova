package com.example.demo.services.serviceImpl;

import com.example.demo.entities.Trainer;
import com.example.demo.repo.TrainerRepository;
import com.example.demo.services.TrainerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrainerServiceImpl implements TrainerService {
	  @Autowired
	    private TrainerRepository trainerRepository;

	    @Override
	    public List<Trainer> getAllTrainers() {
	        // Correctly returns a List<Trainer>
	        return trainerRepository.findAll();
	    }

	    @Override
	    public Optional<Trainer> getTrainerById(Long id) {
	        return trainerRepository.findById(id);
	    }

	    @Override
	    public Trainer createTrainer(Trainer trainer) {
	        return trainerRepository.save(trainer);
	    }

	    @Override
	    public void deleteTrainer(Long id) {
	        trainerRepository.deleteById(id);
	    }
}
