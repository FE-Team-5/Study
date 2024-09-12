import style from "../../styles/CoffeeCard.module.css";

export default function CoffeeCard({ img, name, description }) {
  return (
    <li className={style.coffeeCard}>
      <img className={style.coffeeImg} src={img} alt="" />
      <p className={style.coffeeName}>{name}</p>
      <span>{description}</span>
    </li>
  );
}
