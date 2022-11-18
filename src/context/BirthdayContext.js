import { useState, createContext } from "react";
const BirthdayContext = createContext({});

export const BirthdayProvider = ({ children }) => {
  const [birthday, setBirthday] = useState({ month: 12, day: 20, year: 2022 });

  return (
    <BirthdayContext.Provider value={{ birthday, setBirthday }}>
      {children}
    </BirthdayContext.Provider>
  );
};

export default BirthdayContext;
