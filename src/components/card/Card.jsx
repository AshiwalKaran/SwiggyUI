import React from "react";
import styles from "./Card.module.css";

const Card = ({
  restaurantName,
  dish,
  description,
  rupees,
  rating,
  deliveryTime,
  onAddCard,
  onMinusCard,
  count,
}) => {
  return (
    <div className={styles["card"]}>
      <button className={styles["nameArrowWrapper"]}>
        <div>
          <div className={styles["resturantName"]}>{restaurantName}</div>
          <div className={styles["ratingTimeWrapper"]}>
            <div>
              {/* replace it with actual star image */}
              <span>*</span>
              <span>{rating}</span>
            </div>
            <div>.</div>
            <div>{deliveryTime} MINS</div>
          </div>
        </div>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.2307 5.53999C12.9769 5.28615 12.5653 5.28615 12.3115 5.53999C12.0576 5.79383 12.0576 6.20539 12.3115 6.45923L17.2019 11.3496L5.39414 11.3496C5.03516 11.3496 4.74414 11.6406 4.74414 11.9996C4.74414 12.3586 5.03516 12.6496 5.39414 12.6496L17.2019 12.6496L12.3115 17.54C12.0576 17.7938 12.0576 18.2054 12.3115 18.4592C12.5653 18.7131 12.9769 18.7131 13.2307 18.4592L18.949 12.741C19.3584 12.3315 19.3584 11.6677 18.949 11.2583L13.2307 5.53999Z"
            fill="#868891"
          ></path>
        </svg>
      </button>
      <div className={styles["dottedLine"]}></div>

      <div className={styles["dishImageWrapper"]}>
        <div className={styles["promotedWrapper"]}>
          {/* add a green red indicator here */}
          <div className={styles["dishDescription"]}>Promoted Dish</div>
          <div className={styles["dishName"]}>{dish}</div>
          <div>₹{rupees}</div>
          <div className={styles["dishDescription"]}>{description}</div>
        </div>
        <div className={styles["imageAddBtnWrapper"]}>
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hmuciazp8p64ywvznike"
            className={styles["dishImage"]}
          />
          <div  className={styles["addButtonWrapper"]}>
            {count > 0 && <button onClick={onMinusCard} className={styles['plusClass']}>-</button>}
            {count > 0 && <div>{count}</div>}
            {count === 0 && <div>ADD</div>}
            <button onClick={onAddCard} className={styles['plusClass']}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
