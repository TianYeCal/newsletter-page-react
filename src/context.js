import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <GlobalContext.Provider value={{ show, setShow, email, setEmail }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
