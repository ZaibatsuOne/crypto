import { FC, useEffect, useState } from "react";
import styles from "./CreateItem.module.scss";
import NftItem from "src/components/nft/Nft-Item/NftItem";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Title from "src/components/ui/title/Title";

const CreateItem: FC = () => {
  const { register, handleSubmit, setValue, getValues, watch } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  const userN = watch("firstName");
  console.log(userN);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number>(0);
  return (
    <section className={styles.section}>
      <NftItem title={title} price={price} userName={userN} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.upload}>
          <p className={styles.upload__type}>
            PNG, JPG, GIF, WEBP or MP4. Max 200mb.
          </p>
          <input type="file" className={styles.upload__file} />
        </div>
        <label className={styles.label}>
          <h6>Название</h6>
          <input
            className={styles.input}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          <h6>Цена</h6>
          <input
            className={styles.input}
            type="number"
            name="price"
            required
            maxLength={3}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          <h6>Имя</h6>
          <input className={styles.input} />
        </label>
        <input type="submit" />
      </form>
    </section>
  );
};

export default CreateItem;
