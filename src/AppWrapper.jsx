import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';  
import { auth } from './firebase.js'; 
import App from './App';
import AuthPage from './AuthPage';

function AppWrapper() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router basename="/mp3-player">
      <Routes>
        <Route 
          path="/auth" 
          element={user ? <Navigate to="/" /> : <AuthPage />} 
        />
        <Route 
          path="/" 
          element={user ? <App /> : <Navigate to="/auth" />} 
        />
      </Routes>
    </Router>
  );
}

export default AppWrapper;