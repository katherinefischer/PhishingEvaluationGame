import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ScorePage = () => {
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    const fetchScore = async () => {
      try {
        const { data } = await axios.get('http://127.0.0.1:5000/api/user_responses'); 
        setScore(Math.round(data.score)); 
      } catch (error) {
        console.error('Error fetching score:', error);

      }
    };

    fetchScore();
  }, []);

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Your Score</h1>
      <p style={{ fontSize: '36px' }}>{score}%</p>
      <p>of your responses matched the correct labeling</p>
    </div>
  );
};

export default ScorePage;
