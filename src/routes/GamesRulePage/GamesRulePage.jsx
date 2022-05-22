import classNames from "classnames";
import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./GamesRulePage.module.css";
export const GamesRulePage = () => {
  const { category, level } = useParams();
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.center}>Quiz Rules</h2>
        <ol>
          <li>
            For each <span className={styles.green}>correct</span> answer gets
            +4 points.
          </li>
          <li>
            For each <span className={styles.red}>wrong</span> answer gets -1
            points.
          </li>
          <li>For total question you will get 5 min.</li>
        </ol>
        <div className={styles.center}>Let's showcase your skills 😎</div>
        <Link to={`/${category}/level/${level}`}>
        <div className={styles.center}>
        <button
          className={classNames(
            "button-style-none solid-button",
            styles.start_btn
          )}
        >
          LET'S START
        </button>
      </div>
        </Link>
      </div>
      
    </>
  );
};
