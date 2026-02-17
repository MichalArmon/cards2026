import { Children, createContext, useContext } from "react";

// 1.create context
const MessageContext = createContext();

// 2.create provider
export default function MessageProvider({ children }) {
  const specialMessage = "SPECIAL!";

  return (
    <MessageContext.Provider value={specialMessage}>
      {children}
    </MessageContext.Provider>
  );
}

// 3. create custom hook for using the context(optional)
export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("You used the message context of the message provider!");
  }
  return context;
};
