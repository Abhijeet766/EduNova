package com.example.demo.services;

import java.util.List;
import java.util.Optional;
import com.example.demo.entities.Subject;

public interface SubjectService {
    Subject createSubject(Subject subject);
    Optional<Subject> getSubjectById(int id);
    Subject updateSubject(Subject subject);
    void deleteSubject(int id);
    List<Subject> getAllSubjects(); // New method
}
