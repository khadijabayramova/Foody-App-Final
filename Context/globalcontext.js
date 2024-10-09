import { createContext, useState } from "react";

const GlobalContext = createContext({
  openPopup: false,
  setOpenPopup: () => {},
  openAddProducts: false,
  setOpenAddProducts: () => {},
  image: null,
  setImage: () => {},
  inputdamp: null,
  setInputdamp: () => {},
  resetForm: () => {},
  openoffers: false,
  setOpenoffers: () => {},
  opencategory: false,
  setOpenCategory: () => {},
  openrestaurants: false,
  setOpenrestaurants: () => {},
});

function GlobalProvider({ children }) {
  // No `default` here
  const [openPopup, setOpenPopup] = useState(false);
  const [openaddproducts, setOpenaddproducts] = useState(false);
  const [image, setImage] = useState(null);
  const [inputdamp, setInputdamp] = useState(null);
  const [openoffers, setOpenoffers] = useState(false);
  const [opencategory, setOpenCategory] = useState(false);
  const[openrestaurants, setOpenrestaurants] = useState(false)
  const resetform = () => {
    setImage(null);
    setInputdamp(null);
  };
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
        image,
        setImage,
        resetform,
        openoffers,
        setOpenoffers,
        opencategory,
        setOpenCategory,
        openrestaurants,
        setOpenrestaurants
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// Use named exports
export { GlobalContext, GlobalProvider };
