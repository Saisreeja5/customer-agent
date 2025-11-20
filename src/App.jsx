import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AgentPage from './pages/AgentPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('login'); // Start with login
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentPage('home'); // Redirect to home after login
  };

  const handleSignup = (userData) => {
    setUser(userData);
    setCurrentPage('home'); // Redirect to home after signup
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('login');
  };

  // Show auth pages if not logged in
  if (!user) {
    if (currentPage === 'login') {
      return (
        <LoginPage 
          onLogin={handleLogin}
          onSwitchToSignup={() => setCurrentPage('signup')}
        />
      );
    }
    
    return (
      <SignupPage 
        onSignup={handleSignup}
        onSwitchToLogin={() => setCurrentPage('login')}
      />
    );
  }

  // Show main app if logged in
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        user={user}
        onLogout={handleLogout}
      />
      
      {currentPage === 'home' ? (
        <HomePage setCurrentPage={setCurrentPage} />
      ) : (
        <AgentPage />
      )}
    </div>
  );
}
