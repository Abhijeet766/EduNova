package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Topic;

public interface TopicRepository extends JpaRepository<Topic, Integer> {

}
