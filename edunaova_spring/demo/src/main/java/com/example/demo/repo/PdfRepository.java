package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Pdf;

public interface PdfRepository extends JpaRepository<Pdf, Integer> {

}
