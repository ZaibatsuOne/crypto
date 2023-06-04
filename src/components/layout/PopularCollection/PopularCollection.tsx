import styles from "./PopularCollection.module.scss";
import CollectionItem from "../../nft/CollectionItem/CollectionItem";
import Title from "../../ui/title/Title";
import { FC } from "react";
import { popularCollections } from "../../../ts/PopularCollection";
import ButtonMore from "../../ui/Buttons/ButtonMore/ButtonMore";
const PopularCollection: FC = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Title title="Популярные коллекции" />
        <ButtonMore link="#" />
      </header>
      <section className={styles.list}>
        {popularCollections.map((item) => (
          <article key={item.id} className={styles.wrapper}>
            <CollectionItem
              id={item.id}
              title={item.title}
              img={item.img}
              userAvatar={item.userAvatar}
              userName={item.userName}
              userType={item.userType}
            />
          </article>
        ))}
      </section>
    </section>
  );
};

export default PopularCollection;
