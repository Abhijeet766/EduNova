package com.example.demo.controllers;

import com.example.demo.entities.Pdf;
import com.example.demo.services.PdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/pdfs")
@CrossOrigin(origins = "*") 
public class PdfController {

    @Autowired
    private PdfService pdfService;

    @PostMapping
    public ResponseEntity<Pdf> createPdf(@RequestBody Pdf pdf) {
        try {
            Pdf createdPdf = pdfService.createPdf(pdf);
            return ResponseEntity.ok(createdPdf);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pdf> getPdfById(@PathVariable int id) {
        Optional<Pdf> pdf = pdfService.getPdfById(id);
        return pdf.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pdf> updatePdf(@PathVariable int id, @RequestBody Pdf pdf) {
        pdf.setPdfId(id);
        try {
            Pdf updatedPdf = pdfService.updatePdf(pdf);
            return ResponseEntity.ok(updatedPdf);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePdf(@PathVariable int id) {
        try {
            pdfService.deletePdf(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
