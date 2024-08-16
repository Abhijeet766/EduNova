package com.example.demo.services;
import java.util.Optional;

import com.example.demo.entities.Student;

public interface StudentService {
    Student createStudent(Student student);
    Optional<Student> getStudentById(int id);
    Student updateStudent(Student student);
    void deleteStudent(int id);
}
