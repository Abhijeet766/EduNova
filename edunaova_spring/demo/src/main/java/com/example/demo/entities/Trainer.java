package com.example.demo.entities;
import jakarta.persistence.*;
import java.util.Set;

@Entity
public class Trainer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int trainerId;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String email;

    @Column
    private String address;

    @Column
    private String qualification;

    @Column
    private String specialization;

    @Column
    private String phoneNo;

    @OneToOne
    @JoinColumn(name = "uId")
    private User user;

    @ManyToOne
    @JoinColumn(name = "adminId")
    private Admin admin;

    @ManyToMany
    @JoinTable(
        name = "SubjectTrainer",
        joinColumns = @JoinColumn(name = "trainerId"),
        inverseJoinColumns = @JoinColumn(name = "subjectId")
    )
    private Set<Subject> subjects;

	public Trainer() {
	}

	public Trainer(int trainerId, String firstName, String lastName, String email, String address, String qualification,
			String specialization, String phoneNo, User user, Admin admin, Set<Subject> subjects) {
		super();
		this.trainerId = trainerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.address = address;
		this.qualification = qualification;
		this.specialization = specialization;
		this.phoneNo = phoneNo;
		this.user = user;
		this.admin = admin;
		this.subjects = subjects;
	}

	public int getTrainerId() {
		return trainerId;
	}

	public void setTrainerId(int trainerId) {
		this.trainerId = trainerId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	public Set<Subject> getSubjects() {
		return subjects;
	}

	public void setSubjects(Set<Subject> subjects) {
		this.subjects = subjects;
	}

    
}