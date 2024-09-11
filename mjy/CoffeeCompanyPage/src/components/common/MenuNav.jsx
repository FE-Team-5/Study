import { Link } from "react-router-dom";
import style from "../../styles/MenuNav.module.css";

export default function MenuNav() {
  return (
    <nav className={style.nav}>
      <ul className={style.NavList}>
        <li>
          <Link to="/">
            <p className={style.listItem}>HOME</p>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <p className={style.listItem}>ABOUT US</p>
          </Link>
        </li>
        <li>
          <Link to="/plan">
            <p className={style.listItem}>CREATE YOUR PLAN</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
