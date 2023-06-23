import ButtonMore from "src/components/ui/Buttons/ButtonMore/ButtonMore";
import CollectionItem from "./PopularCollection-item/CollectionItem";
import styles from "./PopularCollection.module.scss";
import Title from "src/components/ui/title/Title";
import { FC } from "react";
import { popularCollections } from "src/data/Collection.data";
import Section from "../Section/Section";
import SectionHeader from "../Section/SectionHeader";

const PopularCollection: FC = () => {
  return (
    <Section>
      <SectionHeader>
        <Title title="Популярные коллекции" />
        <ButtonMore link="#" />
      </SectionHeader>
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
    </Section>
  );
};

export default PopularCollection;
