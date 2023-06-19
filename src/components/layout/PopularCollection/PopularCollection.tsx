import ButtonMore from "src/components/ui/Buttons/ButtonMore/ButtonMore";
import CollectionItem from "./PopularCollection-item/CollectionItem";
import styles from "./PopularCollection.module.scss";
import Title from "src/components/ui/title/Title";
import { FC } from "react";
import { popularCollections } from "src/data/Collection.data";

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
            />
          </article>
        ))}
      </section>
    </section>
  );
};

export default PopularCollection;
