package com.example.demo.entities;

import jakarta.persistence.*;
import java.util.List;


@Entity
public class Admin {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long adminId;

	    private String adminName;
	    private String email;

	    @OneToMany(mappedBy = "admin", cascade = CascadeType.ALL, orphanRemoval = true)
	    private List<Trainer> trainers;

	    // Getters and setters
	    public Long getAdminId() {
	        return adminId;
	    }

	    public void setAdminId(Long adminId) {
	        this.adminId = adminId;
	    }

	    public String getAdminName() {
	        return adminName;
	    }

	    public void setAdminName(String adminName) {
	        this.adminName = adminName;
	    }

	    public String getEmail() {
	        return email;
	    }

	    public void setEmail(String email) {
	        this.email = email;
	    }

	    public List<Trainer> getTrainers() {
	        return trainers;
	    }

	    public void setTrainers(List<Trainer> trainers) {
	        this.trainers = trainers;
	    }
}
