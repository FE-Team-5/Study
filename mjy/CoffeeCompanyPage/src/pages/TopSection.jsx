import { Link } from "react-router-dom";
import style from "../styles/TopSection.module.css";

export default function TopSection() {
  return (
    <section className={style.TopSection}>
      <h2 className={style.title}>
        Great Coffee<br></br> made Simple
      </h2>
      <span className={style.description}>
        Start your morning with the world's best coffee. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, ay tour schedule.
      </span>
      <button className={style.createBtn}>
        <Link to="/plan">Create your plan</Link>
      </button>
    </section>
  );
}
