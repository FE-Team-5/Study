import style from "../../styles/SocialNav.module.css";

export default function SocialNav() {
  return (
    <ul className={style.socialList}>
      <li>
        <a href="https://www.facebook.com">
          <i className={`fa-brands fa-square-facebook ${style.icon}`}></i>
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com">
          <i className={`fa-brands fa-twitter ${style.icon}`}></i>
        </a>
      </li>
      <li>
        <a href="https://www.instargram.com">
          <i className={`fa-brands fa-instagram ${style.icon}`}></i>
        </a>
      </li>
    </ul>
  );
}
