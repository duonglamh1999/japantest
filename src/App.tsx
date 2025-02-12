import { useState } from 'react'
import './App.css'

interface Question {
  question: string;
  options: [string, string];
}

const questions: Question[] = [
  {
    question: "What kind of environment do you prefer?",
    options: ["High-energy city", "Quiet countryside"]
  },
  {
    question: "How important is nightlife and entertainment to you?",
    options: ["Very important", "Not really"]
  },
  {
    question: "What kind of climate do you enjoy the most?",
    options: ["Four seasons", "Tropical"]
  },
  {
    question: "What best describes your ideal pace of life?",
    options: ["Fast-paced", "Laid-back"]
  },
  {
    question: "What kind of food scene excites you the most?",
    options: ["Diverse global cuisine", "Local specialties"]
  },
  {
    question: "What type of cultural experiences interest you?",
    options: ["Modern pop culture", "Traditional history"]
  },
  {
    question: "How important is international accessibility?",
    options: ["Very important", "Not really"]
  },
  {
    question: "What do you value most in a city?",
    options: ["Career opportunities", "Nature and space"]
  },
  {
    question: "Do you like Bee Healthy Cafe?",
    options: ["Yes!", "Absolutely!"]
  }
  // Add more questions here
];

type GameState = 'landing' | 'quiz' | 'results';

function App() {
  const [gameState, setGameState] = useState<GameState>('landing');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const progress = (currentQuestion / questions.length) * 100;

  const handleOptionSelect = (optionIndex: number) => {
    setAnswers([...answers, optionIndex]);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setGameState('results');
    }
  };

  const handleStartQuiz = () => {
    setGameState('quiz');
  };

  const handleRestart = () => {
    setGameState('landing');
    setCurrentQuestion(0);
    setAnswers([]);
  };

  if (gameState === 'landing') {
    return (
      <div className="landing-container" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="landing-content" style={{ textAlign: 'center' }}>
          <h1>Which Japan City Are You?</h1>
          <div className="japan-icon">🗼</div>
          <p>Discover your perfect Japanese city match!</p>
          <button className="start-button" onClick={handleStartQuiz}>
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'results') {
    return (
      <div className="results-container">
        <div className="results-content">
          <h1>Congratulations! 🎉</h1>
          <h2>You are officially my Valentine!</h2>
          <div className="city-image">
            <img src="../public/IMG_3264.jfif" alt="by bo" />
          </div>
          <p>Your city is <b>Duong Lam!</b></p>
          <p>Happy Valentine! Let's fuck shit up in Japan together!❤</p>
          <button className="restart-button" onClick={handleRestart}>
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="quiz-container">
        <div className="question-number">
          Question {currentQuestion + 1}/{questions.length}
        </div>
        
        <div className="question">
          {questions[currentQuestion].question}
        </div>
        
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="option"
              onClick={() => handleOptionSelect(index)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
