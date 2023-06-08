// import styles from "./Home.module.css";
import { useState } from "react";
import CarItem from "./car-item/CarItem";
import { cars as carsData} from "./cars.data.js";
import CreateCarFrom from "./create-car-form/CreateCarFrom.jsx";

const Home = () => {
  const [cars, setCars] = useState(carsData)
  console.log(cars)

  return (
    <div>
      <h1>Cars catalog</h1>
      <CreateCarFrom setCars={setCars}/>
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  );
};

// const fliteredCars = useMemo(
//   () => cars.filter(
//   (car) => car.price < 50000), []);

export default Home;
