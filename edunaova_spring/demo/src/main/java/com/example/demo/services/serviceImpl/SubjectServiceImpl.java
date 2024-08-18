package com.example.demo.services.serviceImpl;

import com.example.demo.entities.Subject;
import com.example.demo.repo.SubjectRepository;
import com.example.demo.services.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubjectServiceImpl implements SubjectService {

    @Autowired
    private SubjectRepository subjectRepository;

    @Override
    public Subject createSubject(Subject subject) {
        return subjectRepository.save(subject);
    }

    @Override
    public Optional<Subject> getSubjectById(int id) {
        return subjectRepository.findById(id);
    }

    @Override
    public Subject updateSubject(Subject subject) {
        if (subjectRepository.existsById(subject.getSubjectId())) {
            return subjectRepository.save(subject);
        } else {
            throw new RuntimeException("Subject not found");
        }
    }

    @Override
    public void deleteSubject(int id) {
        if (subjectRepository.existsById(id)) {
            subjectRepository.deleteById(id);
        } else {
            throw new RuntimeException("Subject not found");
        }
    }

    @Override
    public List<Subject> getAllSubjects() {
        return subjectRepository.findAll(); // Implement method to retrieve all subjects
    }
}
