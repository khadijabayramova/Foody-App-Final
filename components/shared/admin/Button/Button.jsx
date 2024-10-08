import styles from "./Button.module.scss";
import { useContext } from "react";
import { GlobalContext } from "../../../../Context/globalcontext";
const Button = ({ icon: Icon, hideTextOnMobile }) => {
const { handleAddProducts } = useContext(GlobalContext);

  return (
    <div>
      <button onClick={handleAddProducts} 
        className={`${styles.button} ${hideTextOnMobile && styles.hide__text}`}
      >
        {Icon && <Icon />}
        <span>ADD PRODUCTS</span>
      </button>
    </div>
  );
};

export default Button;
