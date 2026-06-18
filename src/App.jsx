import React, { useState } from 'react';
import './styles/global.css';
import MatrixBackground from './components/MatrixBackground';
import Scanlines from './components/Scanlines';
import StartPage from './components/StartPage';
import MainMenu from './components/MainMenu';
import ScenariosMenu from './components/ScenariosMenu';
import FakeBankLogin from './components/FakeBankLogin';
import FakeEmail from './components/FakeEmail';
import AccountBlockedAlert from './components/AccountBlockedAlert';
import PasswordRecoveryForm from './components/PasswordRecoveryForm';
import ExplanationModal from './components/ExplanationModal';
import Quiz from './components/Quiz';
import QuizResults from './components/QuizResults';
import SecurityTips from './components/SecurityTips';

function App() {
  const [currentPage, setCurrentPage] = useState('start');
  const [showExplanation, setShowExplanation] = useState(null);
  const [quizScore, setQuizScore] = useState(null);

  const handleStart = () => {
    setCurrentPage('menu');
  };

  const handleMenuSelection = (option) => {
    if (option === 'scenarios') {
      setCurrentPage('scenarios-menu');
    } else if (option === 'quiz') {
      setCurrentPage('quiz');
    } else if (option === 'tips') {
      setCurrentPage('security-tips');
    } else if (option === 'exit') {
      setCurrentPage('start');
    }
  };

  const handleScenarioSelect = (scenarioKey) => {
    setCurrentPage(`scenario-${scenarioKey}`);
  };

  const handleRevealExplanation = (scenarioId) => {
    setShowExplanation(scenarioId);
  };

  const handleExplanationClose = () => {
    setShowExplanation(null);
    setCurrentPage('scenarios-menu');
  };

  const handleQuizComplete = (score, total) => {
    setQuizScore({ score, total });
    setCurrentPage('quiz-results');
  };

  const handleRestartApp = () => {
    setCurrentPage('start');
    setShowExplanation(null);
    setQuizScore(null);
  };

  const handleBackToMenu = () => {
    setCurrentPage('menu');
    setShowExplanation(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'start':
        return <StartPage onStart={handleStart} />;
      case 'menu':
        return <MainMenu onSelectOption={handleMenuSelection} />;
      case 'scenarios-menu':
        return <ScenariosMenu onSelectScenario={handleScenarioSelect} onBack={handleBackToMenu} />;
      case 'scenario-bank-login':
        return <FakeBankLogin onNext={handleBackToMenu} onRevealExplanation={handleRevealExplanation} />;
      case 'scenario-fake-email':
        return <FakeEmail onNext={handleBackToMenu} onRevealExplanation={handleRevealExplanation} />;
      case 'scenario-account-locked':
        return <AccountBlockedAlert onNext={handleBackToMenu} onRevealExplanation={handleRevealExplanation} />;
      case 'scenario-password-recovery':
        return <PasswordRecoveryForm onNext={handleBackToMenu} onRevealExplanation={handleRevealExplanation} />;
      case 'quiz':
        return <Quiz onComplete={handleQuizComplete} />;
      case 'quiz-results':
        return quizScore ? <QuizResults score={quizScore.score} total={quizScore.total} onRestart={handleRestartApp} /> : null;
      case 'security-tips':
        return <SecurityTips onBack={handleBackToMenu} />;
      default:
        return <StartPage onStart={handleStart} />;
    }
  };

  return (
    <div className="app">
      <MatrixBackground />
      <Scanlines />
      
      <div className="container">
        {renderPage()}
      </div>

      {showExplanation && (
        <ExplanationModal scenarioId={showExplanation} onClose={handleExplanationClose} />
      )}

      <footer className="footer">
        © 2026 Aplikacja edukacyjna stworzona przez <strong>Marek Piłat</strong> | 
        Bezpieczna edukacja o phishingu
      </footer>
    </div>
  );
}

export default App;
