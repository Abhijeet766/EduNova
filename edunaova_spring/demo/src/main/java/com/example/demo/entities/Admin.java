package com.example.demo.entities;

import jakarta.persistence.*;
import java.util.*;


@Entity
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int adminId;

    @Column(nullable = false)
    private String adminName;

    @Column(nullable = false)
    private String email;

    @OneToOne
    @JoinColumn(name = "uId")
    private User user;

    @ManyToOne
    @JoinColumn(name = "roleId")
    private Role role;

    @OneToMany(mappedBy = "admin")
    private Set<Trainer> trainers;

	public Admin() {

	}

	public Admin(int adminId, String adminName, String email, User user, Role role, Set<Trainer> trainers) {
		super();
		this.adminId = adminId;
		this.adminName = adminName;
		this.email = email;
		this.user = user;
		this.role = role;
		this.trainers = trainers;
	}

	public int getAdminId() {
		return adminId;
	}

	public void setAdminId(int adminId) {
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public Set<Trainer> getTrainers() {
		return trainers;
	}

	public void setTrainers(Set<Trainer> trainers) {
		this.trainers = trainers;
	}

	
    
}