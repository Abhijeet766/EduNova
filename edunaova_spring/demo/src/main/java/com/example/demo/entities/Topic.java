package com.example.demo.entities;

import jakarta.persistence.*;
import java.util.Set;

@Entity
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int topicId;

    @Column(nullable = false)
    private String topicName;

    @ManyToOne
    @JoinColumn(name = "subjectId")
    private Subject subject;

    @OneToMany(mappedBy = "topic")
    private Set<Pdf> pdfs;

	public Topic() {
	
	}

	public Topic(int topicId, String topicName, Subject subject, Set<Pdf> pdfs) {
		super();
		this.topicId = topicId;
		this.topicName = topicName;
		this.subject = subject;
		this.pdfs = pdfs;
	}

	public int getTopicId() {
		return topicId;
	}

	public void setTopicId(int topicId) {
		this.topicId = topicId;
	}

	public String getTopicName() {
		return topicName;
	}

	public void setTopicName(String topicName) {
		this.topicName = topicName;
	}

	public Subject getSubject() {
		return subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	}

	public Set<Pdf> getPdfs() {
		return pdfs;
	}

	public void setPdfs(Set<Pdf> pdfs) {
		this.pdfs = pdfs;
	}

	
}
