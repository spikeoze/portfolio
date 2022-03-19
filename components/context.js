import React, { useState, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [Aboutme, setAboutme] = useState(false);
  const [Project, setProject] = useState(false);
  const [Contact, setContact] = useState(false);

  const open = (id) => {
    switch (id) {
      case "1":
        setAboutme(false);
        setProject(false);
        setContact(false);
        break;
      case "2":
        setAboutme(true);
        setProject(false);
        setContact(false);
        break;
      case "3":
        setAboutme(false);
        setProject(true);
        setContact(false);
        break;
      case "4":
        setAboutme(false);
        setProject(false);
        setContact(true);
        break;

      default:
        break;
    }
  };

 

  return (
    <AppContext.Provider value={{ open, Aboutme, Project, Contact }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
