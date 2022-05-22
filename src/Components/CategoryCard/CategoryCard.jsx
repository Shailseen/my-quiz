import classNames from "classnames";
import styles from "./CategoryCard.module.css";

import { NavLink } from "react-router-dom";
export const CategoryCard = ({ item }) => {
  const { id, category, image, description } = item;

  return (
    <>
      <div key={id} className={styles.card_container}>
        <h2>{category.toUpperCase()}</h2>
        <img src={image} alt="img" />
        <div>
          <p>{description}</p>
        </div>
        <NavLink className="text-decoration-none" to={`/${category}/level`}>
          <button
            className={classNames(
              "button-style-none solid-button",
              styles.btn_explore
            )}
          >
            LET'S EXPLORE
          </button>
        </NavLink>
      </div>
    </>
  );
};
