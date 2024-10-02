import styles from "./Button.module.scss";

const Button = ({ icon: Icon, hideTextOnMobile }) => {
  return (
    <button
      className={`${styles.button} ${hideTextOnMobile && styles.hide__text}`}
    >
      {Icon && <Icon />}
      <span>ADD PRODUCTS</span>
    </button>
  );
};

export default Button;
