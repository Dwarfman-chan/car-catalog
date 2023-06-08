import styles from "../Home.module.css";

function CarItem({ car }) {
  return (
    <div key={car.id} className={styles.item}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${car.image})` }}
      />
      <div className={styles.info}></div>
      <h2>{car.name}</h2>
      <p>{`Цена: ${car.price} USDT`}</p>
      <button className="mainBTN">Read more</button>
    </div>
  );
}

export default CarItem;
