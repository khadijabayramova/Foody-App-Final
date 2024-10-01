import { createContext, useState } from "react";

const GlobalContext = createContext({openPopup: false, setOpenPopup: () => {}});

function GlobalProvider({ children }) {  // No `default` here
  const [openPopup, setOpenPopup] = useState(false);
  console.log("openPopup", openPopup);
  return (
    <GlobalContext.Provider value={{ openPopup, setOpenPopup }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Use named exports
export { GlobalContext, GlobalProvider };
