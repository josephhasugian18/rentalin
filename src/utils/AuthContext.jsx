import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({
    name: "Joseph AR H",
    role: "member",
    email: "joseph@example.com",
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook untuk akses data user
export const useAuth = () => useContext(AuthContext);
