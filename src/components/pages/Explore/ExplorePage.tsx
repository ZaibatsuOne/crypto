import styles from "./ExplorePage.module.scss";
import Categories from "../../ui/Categories/Categories";
import Sort from "../../ui/Sort/Sort";

const ExplorePage = () => {
  return (
    <section>
      <header className={styles.header}>
        <Categories />
        <Sort />
      </header>
    </section>
  );
};

export default ExplorePage;
