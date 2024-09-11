import { useLocation } from "react-router-dom";
import style from "../../styles/Header.module.css";
import { useEffect, useState } from "react";
import MenuNav from "../common/MenuNav";
import Logo from "../common/Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    const newIsMobile = window.innerWidth < 800;
    setIsMobile(newIsMobile);
    if (!newIsMobile) {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobile && isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMobile, isMenuOpen]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`${style.hd} mw`}>
      <Logo />
      <MenuNav />
      <button className={`${style.btn}`} onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
}
