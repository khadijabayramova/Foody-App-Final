import { createContext, useState } from "react";

const GlobalContext = createContext({
  openPopup: false,
  setOpenPopup: () => {},
  openAddProducts: false,
  setOpenAddProducts: () => {},
});

function GlobalProvider({ children }) {
  // No `default` here
  const [openPopup, setOpenPopup] = useState(false);
  const [openaddproducts, setOpenaddproducts] = useState(false);
  console.log("openPopup", openPopup);

  const handleAddProducts = () => {
    setOpenaddproducts(!openaddproducts);
  };
  return (
    <GlobalContext.Provider
      value={{
        openPopup,
        setOpenPopup,
        openaddproducts,
        setOpenaddproducts,
        handleAddProducts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// Use named exports
export { GlobalContext, GlobalProvider };
