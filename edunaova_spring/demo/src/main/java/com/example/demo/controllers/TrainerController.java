package com.example.demo.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Trainer;
import com.example.demo.services.TrainerService;

import java.util.List;



@RestController
@RequestMapping("/api/trainers")
@CrossOrigin(origins = "*") // Allow all origins
public class TrainerController {
	 @Autowired
	    private TrainerService trainerService;

	    @GetMapping
	    public List<Trainer> getAllTrainers() {
	        return trainerService.getAllTrainers(); // Should return List<Trainer>
	    }

	    @PostMapping
	    public Trainer createTrainer(@RequestBody Trainer trainer) {
	        return trainerService.createTrainer(trainer);
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Trainer> getTrainerById(@PathVariable Long id) {
	        return trainerService.getTrainerById(id)
	                .map(ResponseEntity::ok)
	                .orElse(ResponseEntity.notFound().build());
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteTrainer(@PathVariable Long id) {
	        trainerService.deleteTrainer(id);
	        return ResponseEntity.noContent().build();
	    }
}