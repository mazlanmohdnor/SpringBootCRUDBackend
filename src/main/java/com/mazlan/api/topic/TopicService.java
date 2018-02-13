package com.mazlan.api.topic;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicService {

	// member variable, and inject as dependency
	@Autowired
	private TopicRepository topicRepository;

	// get all topics
	public List<Topic> getAllTopics() {
		List<Topic> topics = new ArrayList<Topic>();
		topicRepository.findAll().forEach(topics::add);
		return topics;
	}

	// get single topic
	public Optional<Topic> getTopic(String id) {
		// filter array using lambda
		return topicRepository.findById(id);
	}

	// add topic
	public void addTopic(Topic topic) {
		topicRepository.save(topic);
	}

	// update topic
	public void updateTopic(String id, Topic topic) {
		topicRepository.save(topic);
	}

	// delete topic
	public void deleteTopic(String id) {
		topicRepository.deleteById(id);
	}
}
