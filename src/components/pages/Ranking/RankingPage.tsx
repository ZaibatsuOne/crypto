import { FC } from "react";
import styles from "./RankingPage.module.scss";
import Title from "src/components/ui/title/Title";
import User from "src/components/user/User";

const RankingPage: FC = () => {
  return (
    <section className={styles.section}>
      <header>
        <Title title="Рейтинг" />
      </header>
      <ul className={styles.table}>
        <li className={styles.head}>
          <h6 className="w-[362px] col-span-2 ">Коллекция</h6>
          <h6>Объем</h6>
          <h6>24ч %</h6>
          <h6>7д %</h6>
          <h6>Мин. цена</h6>
          <h6>Владельцы</h6>
          <h6>Ассеты</h6>
        </li>
        <div className={styles.line} />
        <li className={styles.row}>
          <div className="col-span-2">
            <div className={styles.nft}>
              <img
                src="../img/user/Background/2.webp"
                className={styles.nft_thumbail}
              />
              <div className={styles.wrapper}>
                <h6 className={styles.nft_title}>
                  Не знаете, как начать торговать NFT?
                </h6>
                <User
                  id={1}
                  userName="Salvador Dali"
                  userAvatar="../img/user/Background/2.webp"
                  userType="Owned By"
                />
              </div>
            </div>
          </div>

          <p>12,4353</p>
          <p className="text-done font-medium text-xl">+3456%</p>
          <p className="text-critical font-medium text-xl"> -564%</p>
          <p className="font-medium text-xl">12,4353</p>
          <p className="font-medium text-xl">3.3k</p>
          <p className="font-medium text-xl">23k</p>
        </li>
      </ul>
    </section>
  );
};

export default RankingPage;

{
  /* <div className={styles.nft}>
<img
  src="../img/user/Background/2.webp"
  className={styles.nft_thumbail}
/>
<div className={styles.wrapper}>
  <h6 className={styles.nft_title}>
    Не знаете, как начать торговать NFT?
  </h6>
  <User
    id={1}
    userName="Salvador Dali"
    userAvatar="../img/user/Background/2.webp"
    userType="Owned By"
  />
</div>
</div> */
}
