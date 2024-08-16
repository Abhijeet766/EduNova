package com.example.demo.services.serviceImpl;



import com.example.demo.entities.Student;
import com.example.demo.repo.StudentRepository;
import com.example.demo.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Optional<Student> getStudentById(int id) {
        return studentRepository.findById(id);
    }

    @Override
    public Student updateStudent(Student student) {
        if (studentRepository.existsById(student.getStudentId())) {
            return studentRepository.save(student);
        } else {
            throw new RuntimeException("Student not found");
        }
    }

    @Override
    public void deleteStudent(int id) {
        if (studentRepository.existsById(id)) {
            studentRepository.deleteById(id);
        } else {
            throw new RuntimeException("Student not found");
        }
    }
}
