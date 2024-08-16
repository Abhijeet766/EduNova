package com.example.demo.services;

import java.util.Optional;

import com.example.demo.entities.Topic;

public interface TopicService {
    Topic createTopic(Topic topic);
    Optional<Topic> getTopicById(int id);
    Topic updateTopic(Topic topic);
    void deleteTopic(int id);
}