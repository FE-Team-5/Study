import { Link } from "react-router-dom";
import style from "../../styles/Logo.module.css";

export default function Logo({ color = "black" }) {
  return (
    <h1 className={style.logo}>
      <Link to="/">
        {/* <img src="" alt="" /> */}
        <p className={style.logoText} style={{ color: color }}>
          coffeeroasters
        </p>
      </Link>
    </h1>
  );
}
