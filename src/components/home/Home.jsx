import React, { useState } from "react";
import { restaurantMockData } from "../../mockData/Mockdata";
import Card from "../card/Card";

import styles from "./Home.module.css";
import FilterButton from "../filterButton/FilterButton";

const Home = () => {
  const [input, setInput] = useState("");
  const [showData, setShowData] = useState(restaurantMockData);

  const vegItems = () => {
    const vegItems = restaurantMockData.filter((ele) => {
      if (ele.veg === true) {
        return ele;
      }
    });
    setShowData(vegItems);
  };
  const nonVegItems = () => {
    const nonVegItems = restaurantMockData.filter((ele) => {
      if (ele.veg === false) {
        return ele;
      }
    });
    setShowData(nonVegItems);
  };
  const fastDelivery = () => {
    const fastDeliveryItems = restaurantMockData.filter((ele) => {
      if (ele.isFastDelivery === true) {
        return ele;
      }
    });
    setShowData(fastDeliveryItems);
  };

  const onAddCard = (id) => {
    const updatedData = showData.map((ele) => {
      if (ele.id === id) {
        ele.count += 1;
      }
      return ele;
    });
    setShowData(updatedData);
  };
  const onMinusCard = (id) => {
    const updatedData = showData.map((ele) => {
      if (ele.id === id && ele.count > 0) {
        ele.count -= 1;
      }
      return ele;
    });
    setShowData(updatedData);
  };

  const changeHandler = (event) => {
    if(event.target.value===''){
        setShowData(restaurantMockData);
        return;
    }
    setInput(event.target.value);
    const filterData = restaurantMockData.filter((ele) => {
      if (input === "") {
        return ele;
      } else {
        return ele?.dish?.includes(input);
      }
    });
    setShowData(filterData);
  };
  return (
    <>
      <div className={styles["searchBarWrapper"]}>
        <input
          className={styles["searchClass"]}
          type="text"
          onChange={changeHandler}
          placeholder="Enter dish name"
        />
      </div>

      <div className={styles["filterWrapper"]}>
        <FilterButton onClick={fastDelivery} buttonLabel={"Fast Delivey"} />
        <FilterButton onClick={vegItems} buttonLabel={"Veg"} />
        <FilterButton onClick={nonVegItems} buttonLabel={"Non-Veg"} />
      </div>
      <div className={styles['wrapper']}>
        <div className={styles["container"]}>
          {showData.map((ele, index) => {
            return (
              <div className={styles["cardWrapper"]} key={index}>
                <Card
                  restaurantName={ele.restaurantName}
                  dish={ele.dish}
                  description={ele.description}
                  rupees={ele.rupees}
                  rating={ele.rating}
                  veg={ele.veg}
                  deliveryTime={ele.deliveryTime}
                  onAddCard={() => onAddCard(ele.id)}
                  count={ele.count}
                  onMinusCard={() => onMinusCard(ele.id)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
