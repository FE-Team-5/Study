import style from "../../styles/DescriptCard.module.css";

export default function DescriptCard({ img, title, description }) {
  return (
    <div className="DescriptCard">
      <img src={img} alt="" />
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
}
