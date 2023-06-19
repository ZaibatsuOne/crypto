import NftItem from "src/components/nft/Nft-Item/NftItem";
import styles from "./CreateItem.module.scss";
import { addNFT } from "src/features/Nft/nftSlice";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { INft } from "src/types/Nft.interface";

interface IForm {
  title: string;
  price: number;
  description: string;
}

const CreateItem: FC = () => {
  //FORM
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      title: "",
      price: 0,
      description: "",
    },
  });

  //Болванка для NFT-item
  const titleNFT: string = watch("title");
  const priceNFT: number = watch("price");
  const image: boolean = false;
  const user: boolean = false;
  const imageNFT: string = image ? `${image}` : "../img/example/nftBG.jpg";
  const userNFT: string = user ? `${user}` : "../img/example/user.jpg";

  //MOCKAPI URL
  const url = import.meta.env.VITE_MOCKAPI_URL;

  //REDUX
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<IForm> = (data) => {
    const { price, title, description } = data;
    if (price < 0) toast.error("Цена не может быть отрицательной");
    else {
      toast.success("Добавлено!");
      const article = { price, title };
      dispatch(addNFT(article));
      axios.post(url, article);
    }
  };

  return (
    <section className={styles.section}>
      <Toaster />
      <div>
        <NftItem
          title={titleNFT}
          price={priceNFT}
          img={imageNFT}
          // user={{1, "1", "1"}}
          id={1}
          userId={1}
          category={1}
          userName="Your Name"
          userAvatar={userNFT}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.label}>
          <h6>Загрузить NFT</h6>
          <div className={styles.upload}>
            <p className={styles.upload__type}>
              PNG, JPG, GIF, WEBP or MP4. Max 200mb.
            </p>
            <input type="file" className={styles.upload__file} />
          </div>
        </label>
        <label className={styles.label}>
          <h6>Название</h6>
          <input
            {...register("title")}
            className={styles.input}
            placeholder="Имя NFT"
          />
        </label>
        <label className={styles.label}>
          <h6>Цена</h6>
          <input
            {...register("price", { valueAsNumber: true })}
            className={styles.input}
            placeholder="Введите цену за один предмет (ETH)"
            type="number"
          />
        </label>
        <label className={styles.label}>
          <h6>Описание</h6>
          <textarea
            {...register("description")}
            className={styles.textarea}
            placeholder="например “Это очень ограниченный товар”"
          />
        </label>
        <input type="submit" value="Загрузить" className={styles.button} />
      </form>
    </section>
  );
};

export default CreateItem;
