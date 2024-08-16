package com.example.demo.entities;

import jakarta.persistence.*;
import java.util.Set;

@Entity
public class Subject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int subjectId;

    @Column(nullable = false)
    private String subjectName;

    @ManyToMany(mappedBy = "subjects")
    private Set<Trainer> trainers;

    @OneToMany(mappedBy = "subject")
    private Set<Topic> topics;

    @OneToMany(mappedBy = "subject")
    private Set<Pdf> pdfs;

	public Subject() {
		
	}

	public Subject(int subjectId, String subjectName, Set<Trainer> trainers, Set<Topic> topics, Set<Pdf> pdfs) {
		super();
		this.subjectId = subjectId;
		this.subjectName = subjectName;
		this.trainers = trainers;
		this.topics = topics;
		this.pdfs = pdfs;
	}

	public int getSubjectId() {
		return subjectId;
	}

	public void setSubjectId(int subjectId) {
		this.subjectId = subjectId;
	}

	public String getSubjectName() {
		return subjectName;
	}

	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}

	public Set<Trainer> getTrainers() {
		return trainers;
	}

	public void setTrainers(Set<Trainer> trainers) {
		this.trainers = trainers;
	}

	public Set<Topic> getTopics() {
		return topics;
	}

	public void setTopics(Set<Topic> topics) {
		this.topics = topics;
	}

	public Set<Pdf> getPdfs() {
		return pdfs;
	}

	public void setPdfs(Set<Pdf> pdfs) {
		this.pdfs = pdfs;
	}

   
}
