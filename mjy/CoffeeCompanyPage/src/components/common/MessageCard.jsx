import style from "../../styles/MessageCard.module.css";

export default function MessageCard({ index, title, description }) {
  return (
    <div className={style.card}>
      {/* <h4>01</h4>
      <strong>Pick your coffee</strong>
      <span>
        Select from our evolving range of artisan coffees. Our beans are
        ethically sourced and we pay fair prices for them. There are new coffees
        in all profiles every month for you to try out.
      </span> */}
      <h4 className={style.index}>{index}</h4>
      <strong className={style.title}>{title}</strong>
      <span className={style.description}>{description}</span>
    </div>
  );
}
