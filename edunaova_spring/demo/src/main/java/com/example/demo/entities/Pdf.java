package com.example.demo.entities;

import jakarta.persistence.*;

@Entity
public class Pdf {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pdfId;

    @ManyToOne
    @JoinColumn(name = "subjectId")
    private Subject subject;

    @ManyToOne
    @JoinColumn(name = "topicId")
    private Topic topic;

	public Pdf() {
		
	}

	public Pdf(int pdfId, Subject subject, Topic topic) {
		super();
		this.pdfId = pdfId;
		this.subject = subject;
		this.topic = topic;
	}

	public int getPdfId() {
		return pdfId;
	}

	public void setPdfId(int pdfId) {
		this.pdfId = pdfId;
	}

	public Subject getSubject() {
		return subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	}

	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	
    
}
