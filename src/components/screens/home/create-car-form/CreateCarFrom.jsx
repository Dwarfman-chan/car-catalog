import { useState } from "react";
import styles from "./CreateCarFrom.module.css";

const CreateCarFrom = ({ setCars }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const createCar = (e) => {
    e.preventDefault();
    setCars((prev) => [...prev, { id: prev.length + 1, name, price, image }]);
  };

  return (
    <form className={styles.form}>
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <input
        placeholder="Picture"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <button className="mainBTN" onClick={(e) => createCar(e)}>
        Create
      </button>
    </form>
  );
};

export default CreateCarFrom;
