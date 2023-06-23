import ConnectWalletItem from "./ConnectWallet-item/ConnectWalletItem";
import Section from "src/components/layout/Section/Section";
import styles from "./ConnectWalletPage.module.scss";
import Title from "src/components/ui/title/Title";
import { FC } from "react";
import { motion } from "framer-motion";
import { pVariants } from "src/utils/AnimationVariants";
import { walletList } from "src/data/Wallet.data";

const ConnectWalletPage: FC = () => {
  return (
    <Section>
      <header className={styles.header}>
        <Title title="Подключить кошелек" />
        <p className={styles.subtitle}>
          Просто и надежно: подключите ваш криптовалютный кошелек для удобного
          управления активами и безопасных транзакций
        </p>
      </header>
      <section className={styles.wrapper}>
        {walletList.map((item, i) => (
          <motion.section
            animate={"visible"}
            initial={"hidden"}
            custom={i}
            variants={pVariants}
            transition={{ duration: 1.2 }}
            className={styles.category}
            key={item.id}
          >
            <ConnectWalletItem
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
            />
          </motion.section>
        ))}
      </section>
    </Section>
  );
};

export default ConnectWalletPage;
