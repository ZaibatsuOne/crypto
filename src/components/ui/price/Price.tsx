import styles from "./Price.module.scss";
const Price = ({ price }: { price: number }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Ставка</p>
      <span className={styles.price}>{price} ETH</span>
    </div>
  );
};

export default Price;
