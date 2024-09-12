import style from "../styles/CollectionSection.module.css";
import CoffeeCard from "../components/common/CoffeeCard";

export default function CollectionSection() {
  let descriptionText =
    "Light and flavorful blend with cocoa andblack pepper for an intense experience";

  let coffeeImgArr = [
    "https://image.istarbucks.co.kr/upload/store/skuimg/2023/05/[11029237]_20230526150758168.jpg",
    "https://image.istarbucks.co.kr/upload/store/skuimg/2024/08/[11151545]_20240822111534990.jpg",
    "https://image.istarbucks.co.kr/upload/store/skuimg/2023/11/[11059722]_20231110094425183.jpg",
    "https://image.istarbucks.co.kr/upload/store/skuimg/2021/07/[11125845]_20210721100204061.jpg",
  ];

  return (
    <section className={style.CollectionSection}>
      <ul>
        <CoffeeCard
          img={coffeeImgArr[0]}
          name="맛있는 커피1"
          description={descriptionText}
        />
        <CoffeeCard
          img={coffeeImgArr[1]}
          name="맛있는 커피2"
          description={descriptionText}
        />
        <CoffeeCard
          img={coffeeImgArr[2]}
          name="맛있는 커피3"
          description={descriptionText}
        />
        <CoffeeCard
          img={coffeeImgArr[3]}
          name="맛있는 커피4"
          description={descriptionText}
        />
      </ul>
    </section>
  );
}
