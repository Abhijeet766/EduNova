package com.example.demo.services;

import java.util.Optional;

import com.example.demo.entities.Pdf;

public interface PdfService {
    Pdf createPdf(Pdf pdf);
    Optional<Pdf> getPdfById(int id);
    Pdf updatePdf(Pdf pdf);
    void deletePdf(int id);
}
