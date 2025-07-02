
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <div className="min-h-screen bg-gray-900">
          <Header />
          <main className="container mx-auto p-4 md:p-8">
            <Routes>
              <Route path="/raffles" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <AdminPage />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<Navigate to="/raffles" replace />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
