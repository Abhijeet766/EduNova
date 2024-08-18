package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Subject;
import com.example.demo.services.SubjectService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/subjects")
@CrossOrigin(origins = "*")
public class SubjectController {

    @Autowired
    private SubjectService subjectService;

    @PostMapping
    public ResponseEntity<Subject> createSubject(@RequestBody Subject subject) {
        Subject createdSubject = subjectService.createSubject(subject);
        return ResponseEntity.ok(createdSubject);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Subject> getSubjectById(@PathVariable int id) {
        Optional<Subject> subject = subjectService.getSubjectById(id);
        return subject.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Subject> updateSubject(@PathVariable int id, @RequestBody Subject subject) {
        subject.setSubjectId(id);
        Subject updatedSubject = subjectService.updateSubject(subject);
        return ResponseEntity.ok(updatedSubject);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubject(@PathVariable int id) {
        subjectService.deleteSubject(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Subject>> getAllSubjects() {
        List<Subject> subjects = subjectService.getAllSubjects();
        return ResponseEntity.ok(subjects);
    }
}
