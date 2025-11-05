import styles from "./ButtonStyled.module.css";

interface Props {
  children: React.ReactNode;
  color:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

const ButtonStyled = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${styles["btn-" + color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonStyled;
