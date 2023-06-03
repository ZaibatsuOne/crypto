import { FC } from "react";
import styles from "./Price.module.scss";

type TypePriceProps = {
  price: number;
};
const Price: FC<TypePriceProps> = ({ price }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Ставка</p>
      <span className={styles.price}>{price} ETH</span>
    </div>
  );
};

export default Price;
