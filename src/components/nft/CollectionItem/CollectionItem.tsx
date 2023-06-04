import styles from "./CollectionItem.module.scss";
import { FC } from "react";
import { TypePopularCollection } from "../../../ts/PopularCollection";
import UserAvatar from "../../user/UserAvatar";
import UserName from "../../user/UserName";
import Likes from "../../ui/likes/Likes";

const CollectionItem: FC<TypePopularCollection> = ({
  title,
  userAvatar,
  img,
  userName,
}) => {
  return (
    <>
      <header className={styles.header}>
        <img src={img.imageOne} className={styles.imageFirst} />
        <img src={img.imageTwo} className={styles.imageSecond} />
        <img src={img.imageThree} className={styles.imageThird} />
        <img src={img.imageFour} className={styles.imageFour} />
        <img src={img.imageFive} className={styles.imageFive} />
      </header>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <UserAvatar
            userAvatar={userAvatar}
            userName={userName}
            width="64px"
            height="64px"
          />
          <div>
            <h6 className={styles.title}>{title}</h6>
            <span className={styles.created}>
              <p>Создан </p>
              <UserName userName={userName} />
            </span>
          </div>
        </div>
        <div>
          <Likes />
        </div>
      </footer>
    </>
  );
};

export default CollectionItem;
