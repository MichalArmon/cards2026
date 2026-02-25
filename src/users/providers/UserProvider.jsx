import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import normalizeUser from "../helpers/normalization/normalizeUser";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
  getToken,
} from "../../services/localStorageService";
import { useNavigate } from "react-router-dom";

// 1.create context
const UserContext = createContext();

// 2.create provider
export default function UserProvider({ children }) {
  const navigate = useNavigate();

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser(token));

  // ✔️✔️✔️SIGN UP ✔️✔️✔️
  const handleSubmitRegister = async (data) => {
    const userDetailsForServer = normalizeUser(data);

    try {
      const response = await axios.post(
        "https://cardsserver-8uqn.onrender.com/users",
        userDetailsForServer,
      );
      console.log(response);
      const registeredUser = {
        email: data.email,
        password: data.password,
      };
      console.log(registeredUser);
      handleSubmitLogin(registeredUser);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        alert(error.response.data);
      }
    }
  };

  // ✔️✔️✔️LOGIN ✔️✔️✔️

  const handleSubmitLogin = async (user) => {
    console.log(user);

    try {
      const response = await axios.post(
        "https://cardsserver-8uqn.onrender.com/users/login",
        user,
      );
      console.log(response.data);
      setTokenInLocalStorage(response.data);
      setToken(response.data);
      const decodedUser = getUser();
      console.log("decodedUser", decodedUser);
      setUser(decodedUser);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("The login failed");
    }
  };

  // ✔️✔️✔️LOG-out ✔️✔️✔️
  const handleLogout = () => {
    removeToken();
    setToken(null);
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        handleSubmitRegister,
        handleSubmitLogin,
        handleLogout,
      }}
    >
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
