import style from "../styles/WhyChooseSection.module.css";

export default function WhyChooseSection() {
  return (
    <section className={style.WhyChooseSection}>
      <div className={style.wrap}>
        <div className={style.textCon}>
          <h3 className={style.title}>Why choose us?</h3>
          <span className={style.description}>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level
          </span>
        </div>
      </div>

      <ul className={style.cardList}>
        <li className={style.card}>
          <i className={`${style.icon} fa-solid fa-star`}></i>
          <strong className={style.cardTitle}>Best quality </strong>
          <span className={style.cardDescript}>
            Discover an endless variety of the world's best artisan coffee from
            each of our roasters.
          </span>
        </li>
        <li className={style.card}>
          <i className={`${style.icon} fa-solid fa-gift`}></i>
          <strong className={style.cardTitle}>Exclusive benefits </strong>
          <span className={style.cardDescript}>
            Speacial offesrs and swag when you subscribe including 30% off your
            first shipment
          </span>
        </li>
        <li className={style.card}>
          <i className={`${style.icon} fa-solid fa-truck`}></i>
          <strong className={style.cardTitle}>Free shipping </strong>
          <span className={style.cardDescript}>
            We cover the cost and coffee is delivered fast. Peack freshness :
            guaranteed.
          </span>
        </li>
      </ul>
    </section>
  );
}
