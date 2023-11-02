import HeartFilled from "../assets/iconos/heart-filled.svg"
import heart from "../assets/iconos/heartt.svg"

export default function Heart({ filled, onClick }) {
  return (
    <>
      <div onClick={onClick}>
        {filled ? (
          <img src={HeartFilled} alt="Filled Heart" />
        ) : (
          <img src={heart} alt="Empty Heart" />
        )}
      </div>
    </>
  );
}
