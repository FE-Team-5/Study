import style from "../../styles/Footer.module.css";
import Logo from "../common/Logo";
import MenuNav from "../common/MenuNav";
import SocialNav from "../common/SocialNav";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Logo color="white" />
      <MenuNav />
      <SocialNav />
    </footer>
  );
}
