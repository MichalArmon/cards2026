import { Children, createContext, useContext, useState } from "react";

// 1.create context
const UserContext = createContext();

// 2.create provider
export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. create custom hook for using the context(optional)
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("You used the message context of the message provider!");
  }
  return context;
};
