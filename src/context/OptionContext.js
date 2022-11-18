import { useState, createContext } from "react";
const OptionContext = createContext({});

export const OptionProvider = ({ children }) => {
  const [options, setOptions] = useState({
    optionA: true,
    optionB: false,
    optionC: true,
    optionD: false,
  });

  return (
    <OptionContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionContext.Provider>
  );
};

export default OptionContext;
