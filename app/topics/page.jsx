'use client';

import { useState } from 'react';
import './topics.css'; // CSS dosyasını dahil et

export default function TopicsPage() {
  const topics = [
    'Programming', 'Data Science', 'Technology', 'Self Improvement', 'Writing', 
    'Relationships', 'Machine Learning', 'Productivity', 'Politics', 'Cryptocurrency',
    'Psychology', 'Money', 'Business', 'Python', 'Health', 'Science', 'Mental Health',
    'Life', 'Software Development', 'Startup', 'Design', 'JavaScript', 'Artificial Intelligence',
    'Culture', 'Software Engineering', 'Blockchain', 'Coding', 'Entrepreneurship', 'React', 'UX',
    'Education', 'History', 'Humor', 'Web Development', 'Work', 'Lifestyle', 'Society', 
    'Deep Learning', 'Marketing', 'Books', 'Nft', 'Social Media', 'Leadership', 'Android', 'Apple',
    'Women', 'Mindfulness', 'Sexuality'
  ];

  const [selectedTopics, setSelectedTopics] = useState([]);

  const toggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const isContinueDisabled = selectedTopics.length < 3;

  return (
    <div className="topics-container">
      <h1>Medium</h1>
      <p>Choose three or more.</p>

      <div className="topics-grid">
        {topics.map((topic) => (
          <div 
            key={topic} 
            className={`topic-item ${selectedTopics.includes(topic) ? 'selected' : ''}`}
            onClick={() => toggleTopic(topic)}
          >
            {topic}
            <span className="plus-sign">{selectedTopics.includes(topic) ? '✔' : '+'}</span>
          </div>
        ))}
      </div>

      <button className="continue-button" disabled={isContinueDisabled}>
        Continue
      </button>
    </div>
  );
}