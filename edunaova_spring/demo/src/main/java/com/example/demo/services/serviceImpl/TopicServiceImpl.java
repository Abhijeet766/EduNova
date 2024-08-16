package com.example.demo.services.serviceImpl;

import com.example.demo.repo.TopicRepository;
import com.example.demo.entities.Topic;
import com.example.demo.repo.SubjectRepository;
import com.example.demo.services.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TopicServiceImpl implements TopicService {

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private SubjectRepository subjectRepository;

    @Override
    public Topic createTopic(Topic topic) {
        if (subjectRepository.existsById(topic.getSubject().getSubjectId())) {
            return topicRepository.save(topic);
        } else {
            throw new RuntimeException("Subject not found");
        }
    }

    @Override
    public Optional<Topic> getTopicById(int id) {
        return topicRepository.findById(id);
    }

    @Override
    public Topic updateTopic(Topic topic) {
        if (topicRepository.existsById(topic.getTopicId())) {
            return topicRepository.save(topic);
        } else {
            throw new RuntimeException("Topic not found");
        }
    }

    @Override
    public void deleteTopic(int id) {
        if (topicRepository.existsById(id)) {
            topicRepository.deleteById(id);
        } else {
            throw new RuntimeException("Topic not found");
        }
    }
}
