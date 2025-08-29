import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

function App() {
  const [activeUser, setActiveUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('activeUser');
    if (storedUser) {
      setActiveUser(storedUser);
    }
  }, []);

  const handleUserSelect = (userName: string) => {
    localStorage.setItem('activeUser', userName);
    setActiveUser(userName);
  };

  const handleLogout = () => {
    localStorage.removeItem('activeUser');
    setActiveUser(null);
  };

  if (!activeUser) {
    return <LandingPage onUserSelect={handleUserSelect} />;
  }

  return <Dashboard activeUser={activeUser} onLogout={handleLogout} />;
}

export default App;