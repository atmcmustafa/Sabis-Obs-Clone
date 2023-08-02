import { createContext, useState } from "react";

export const ButtonContext = createContext();

export const ButtonContextProvider = ({ children }) => {
  const [navbarWidth, setNavbarWidth] = useState(false);

  const [toggle, setToggle] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
    console.log(toggle);
  };

  const handleProfileToggle = () => {
    setProfileToggle((prev) => !prev);
    console.log(profileToggle);
  };

  const values = {
    navbarWidth,
    setNavbarWidth,
    toggle,
    setToggle,
    handleToggle,
    profileToggle,
    setProfileToggle,
    handleProfileToggle,
  };

  return (
    <ButtonContext.Provider value={values}>{children}</ButtonContext.Provider>
  );
};
