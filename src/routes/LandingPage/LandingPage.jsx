import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { CategoryCard } from "../../Components/CategoryCard/CategoryCard";
import { gameCateogry } from "../../utils/Database";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  
  return (
    <div className={styles.landingPage}>
      {gameCateogry.map((item) => {
        return (
          <CategoryCard key={item.id} item={item}/>
        )
      })}
    </div>
  );
};
