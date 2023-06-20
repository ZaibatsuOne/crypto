import Button from "src/components/ui/Buttons/Button";
import Coutdown from "src/components/ui/coutdown/Coutdown";
import Likes from "src/components/ui/likes/Likes";
import styles from "../ItemDetailsPage.module.scss";
import User from "src/components/user/User";
import { BiData } from "react-icons/bi";
import { FC } from "react";
import { TypeUser } from "src/types/User.type";

type TypeItemContent = {
  title: string;
  price: number;
  description: string | undefined;
} & TypeUser;

const ItemDetailsContent: FC<TypeItemContent> = ({
  id,
  title,
  price,
  description,
  userName,
  userAvatar,
}) => {
  return (
    <section className={styles.content}>
      <q className={styles.title}>{title}</q>
      <div className={styles.wrapper}>
        <div className={styles.buttons}>
          <Likes />
          <Likes />
        </div>
        <div className={styles.buttons}>
          <img src="../img/ui/button/telegram.svg" className={styles.button} />
          <img src="../img/ui/button/more.svg" className={styles.button} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <span className={styles.inner}>
          <User userName={userName} userAvatar={userAvatar} id={id} />
        </span>
        <span className={styles.inner}>
          <User />
        </span>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.wrapper}>
        <span className={styles.inner}>
          <div className={styles.current}>
            <p className="text-sm font-semibold">Ставка</p>
            <span className="flex items-center gap-1">
              <p className="text-lg font-bold">{price} ETH</p>
              <p className="text-[13px] font-semibold"> = $12.246</p>
            </span>
          </div>
        </span>
        <span className={styles.inner}>
          <div className="flex">
            <p className="text-sm font-semibold">Таймер</p>
          </div>
          <div className="absolute right-[-60px] top-[20%]">
            <Coutdown
              bg=""
              paddingX=""
              paddingY=""
              iconDisplay="none"
              fontWeight="bold"
            />
          </div>
        </span>
      </div>
      <Button text="Сделать ставку" borderColor="#FFF" icon={<BiData />} />
    </section>
  );
};

export default ItemDetailsContent;
