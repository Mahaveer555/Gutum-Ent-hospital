import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('adminToken') || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (!token) {
        setAdmin(null);
        setLoading(false);
        return;
      }
      try {
        const res = await api.get('/admin/me');
        if (res.data && res.data.success) {
          setAdmin(res.data.admin);
        } else {
          logout();
        }
      } catch (err) {
        logout();
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [token]);

  const login = async (email, password) => {
    const res = await api.post('/admin/login', { email, password });
    if (res.data && res.data.success) {
      const newToken = res.data.token;
      localStorage.setItem('adminToken', newToken);
      setToken(newToken);
      setAdmin(res.data.admin);
      return res.data;
    }
    throw new Error(res.data.message || 'Login failed');
  };

  const logout = async () => {
    try {
      await api.post('/admin/logout');
    } catch (e) {
      // Ignore
    }
    localStorage.removeItem('adminToken');
    setToken(null);
    setAdmin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        admin,
        token,
        isAuthenticated: !!admin,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
