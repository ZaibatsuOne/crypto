import Button from "src/components/ui/Buttons/Button";
import styles from "../AuthorPage.module.scss";
import UserAvatar from "src/components/user/UserAvatar";
import UserName from "src/components/user/UserName";
import { FC } from "react";
import { TypeCategoryList } from "../AuthorPage";

type AuthorPageProps = {
  categoryList: TypeCategoryList[];
  category: number | null;
  setCategory: React.Dispatch<React.SetStateAction<number | null>>;
};

const AuthorProfile: FC<AuthorPageProps> = ({
  categoryList,
  category,
  setCategory,
}) => {
  return (
    <section className={styles.cover}>
      <img src="../img/user/Background/2.webp" className={styles.background} />
      <div className={styles.avatar}>
        <UserAvatar
          userAvatar="../img/user/Background/3.jpg"
          userName="ff"
          width="274px"
          height="274px"
        />
      </div>
      <div className={styles.wrapper}>
        <p className="font-light">Author profile</p>
        <UserName userName="Trista Francis" fontSize="36px" />
        <p className={styles.quote}>
          Смещаемый контент меняет свой размер таким образом, чтобы подстроиться
          под область внутри блока пропорционально собственным параметрам:
          окончательный размер контента будет определён как "помещённый внутрь"
          блока, ограничиваясь его шириной и высотой.
        </p>
      </div>
      <aside className={styles.aside}>
        <ul className={styles.social}>
          <li>
            <img
              src="../img/ui/social/Author/facebook.svg"
              className={styles.item}
            />
          </li>
          <li>
            <img
              src="../img/ui/social/Author/twitter.svg"
              className={styles.item}
            />
          </li>
          <li>
            <img
              src="../img/ui/social/Author/google.svg"
              className={styles.item}
            />
          </li>
          <li>
            <img
              src="../img/ui/social/Author/twitch.svg"
              className={styles.item}
            />{" "}
          </li>
        </ul>
        <Button
          text="Подписаться"
          icon={null}
          borderColor="#FFF"
          paddingY="9px"
        />
      </aside>
      <ul className={styles.menu}>
        {categoryList.map((item) => (
          <li
            onClick={() => setCategory(item.category)}
            className={
              category === item.category
                ? "font-bold cursor-pointer"
                : "cursor-pointer"
            }
          >
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AuthorProfile;
