import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <div className={classNames(styles.navbar_container)}>
      <Link className="text-decoration-none" to="/">
        <h2 className={styles.header}>FUN T2O</h2>
      </Link>
    </div>
  );
};
