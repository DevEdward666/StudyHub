import React, { createContext, useContext, useState, useEffect } from "react";

type AuthContextType = {
  currentUser: any; // should contain accessToken inside
  setAuth: (user: any) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    try {
      if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error("Invalid currentUser in localStorage", e);
      localStorage.removeItem("currentUser");
    }    
    setLoading(false);
  }, []);
  const setAuth = (user: any) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ currentUser, setAuth, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
