package com.example.demo.services.serviceImpl;

import com.example.demo.entities.Pdf;
import com.example.demo.repo.PdfRepository;
import com.example.demo.repo.TopicRepository;
import com.example.demo.repo.SubjectRepository;
import com.example.demo.services.PdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PdfServiceImpl implements PdfService {

    @Autowired
    private PdfRepository pdfRepository;

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private SubjectRepository subjectRepository;

    @Override
    public Pdf createPdf(Pdf pdf) {
        // Ensure the topic and subject exist before saving the PDF
        if (topicRepository.existsById(pdf.getTopic().getTopicId()) &&
            subjectRepository.existsById(pdf.getSubject().getSubjectId())) {
            return pdfRepository.save(pdf);
        } else {
            throw new RuntimeException("Topic or Subject not found");
        }
    }

    @Override
    public Optional<Pdf> getPdfById(int id) {
        return pdfRepository.findById(id);
    }

    @Override
    public Pdf updatePdf(Pdf pdf) {
        if (pdfRepository.existsById(pdf.getPdfId())) {
            return pdfRepository.save(pdf);
        } else {
            throw new RuntimeException("PDF not found");
        }
    }

    @Override
    public void deletePdf(int id) {
        if (pdfRepository.existsById(id)) {
            pdfRepository.deleteById(id);
        } else {
            throw new RuntimeException("PDF not found");
        }
    }
}