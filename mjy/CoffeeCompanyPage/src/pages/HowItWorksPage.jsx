import MessageCard from "../components/common/MessageCard";
import style from "../styles/HowItWorksPage.module.css";

export default function HowItWorksPage() {
  return (
    <section className={style.HowItWorksPage}>
      <div className={style.titleCon}>
        <h3 className={style.title}>How it works</h3>
      </div>

      <div className={style.cardList}>
        <MessageCard
          className={style.Card}
          index="01"
          title="Choose the frequency"
          description="Select from our evolving range of artisan coffees. Our beans are
        ethically sourced and we pay fair prices for them. There are new coffees
        in all profiles every month for you to try out.
      
        "
        />

        <MessageCard
          className={style.Card}
          index="02"
          title="Pick your Coffee"
          description="Select from our evolving range of artisan coffees. Our beans are
        ethically sourced and we pay fair prices for them. There are new coffees
        in all profiles every month for you to try out."
        />

        <MessageCard
          className={style.Card}
          index="03"
          title="Receive and enjoy!"
          description="We ship your package within 48 hours.
        freshly roasted. Sit back and enjoy award-winning world-class coffees cureated to provide a distinct tasting experience."
        />
      </div>

      <div className={style.btnCon}>
        <button className={style.createBtn}> Create your plan</button>
      </div>
    </section>
  );
}
