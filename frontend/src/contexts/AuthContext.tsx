import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/lib/api";
import { useNavigate } from "react-router-dom";

export interface User {
  id: string;
  email: string;
  full_name?: string;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (data: any) => Promise<void>;
  signUp: (data: any) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => { },
  signUp: async () => { },
  signOut: async () => { },
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const storedUser = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      if (!token || !storedUser) {
        setUser(null);
        setLoading(false);
        return;
      }
      const user = await api.auth.getUser();
      setUser(user);
    } catch (e) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (data: any) => {
    const res = await api.auth.login(data);
    localStorage.setItem('token', res.token);
    localStorage.setItem('user', JSON.stringify(res.user));
    setUser(res.user);
    navigate('/');
  };

  const signUp = async (data: any) => {
    const res = await api.auth.register(data);
    localStorage.setItem('token', res.token);
    localStorage.setItem('user', JSON.stringify(res.user));
    setUser(res.user);
    navigate('/');
  };

  const signOut = async () => {
    api.auth.signOut();
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
