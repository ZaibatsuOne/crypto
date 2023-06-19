import axios from "axios";
import Button from "src/components/ui/Buttons/Button";
import styles from "../AuthorPage.module.scss";
import UserAvatar from "src/components/user/UserAvatar";
import UserName from "src/components/user/UserName";
import { BiCopy } from "react-icons/bi";
import { FC, useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { TypeCategoryList } from "../AuthorPage";
import { useCopyToClipboard } from "usehooks-ts";
import { useParams } from "react-router-dom";
import { TypeUser } from "src/types/User.type";

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
  const { id } = useParams();
  const [cards, setCards] = useState<TypeUser | null>(null);

  const url = import.meta.env.VITE_MOCKAPI_URL;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<TypeUser[]>(`${url}?id=${id}`);
      setCards(response.data[0]);
    };
    fetchData();
    window.scroll(0, 0);
  }, []);

  const adress = "0xb794f5ea0ba39494ce839613fffba74279579268";
  const [value, copy] = useCopyToClipboard();

  return (
    <>
      {cards && (
        <section className={styles.cover}>
          <Toaster />
          <img
            src="../img/user/Background/2.webp"
            className={styles.background}
          />
          <div className={styles.avatar}>
            <UserAvatar
              userAvatar={cards.userAvatar}
              userName={cards.userName}
              width="274px"
              height="274px"
            />
          </div>
          <div className={styles.wrapper}>
            <p className="font-light">Author profile</p>
            <UserName userName={cards.userName} fontSize="36px" />
            <p className={styles.quote}>
              Смещаемый контент меняет свой размер таким образом, чтобы
              подстроиться под область внутри блока пропорционально собственным
              параметрам: окончательный размер контента будет определён как
              "помещённый внутрь" блока, ограничиваясь его шириной и высотой.
            </p>
            <div className={styles.wallet}>
              <div className={styles.adress}>
                <span>{adress}</span>
              </div>
              <button
                onClick={() => {
                  copy(adress);
                  toast.success("Скопировано");
                }}
              >
                <BiCopy />
              </button>
            </div>
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
      )}
    </>
  );
};

export default AuthorProfile;
