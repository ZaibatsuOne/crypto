import styles from "./NftItem.module.scss";
const NftItem = ({
  img,
  title,
  net,
  userName,
  userAvatar,
  price,
}: {
  img: string;
  title: string;
  net: string;
  userName: string;
  userAvatar: string;
  price: number;
}) => {
  return (
    <article className={styles.block}>
      <img src={img} />
      <header className={styles.header}>
        <q className={styles.title}>{title}</q>
        <span className={styles.net}>{net}</span>
      </header>
    </article>
  );
};

export default NftItem;
