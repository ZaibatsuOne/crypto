import Button from "src/components/ui/Buttons/Button";
import DropdownGroup from "./DropDown/DropdownGroup";
import DropdownItem from "./DropDown/DropdownItem";
import HamburgerMenu from "./Hamburger/HamburgerMenu";
import Logo from "src/components/ui/logo/Logo";
import styles from "../Header.module.scss";
import { BiWallet } from "react-icons/bi";
import { FC, useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { RiArrowUpSLine } from "react-icons/ri";

const HeaderNav: FC = () => {
  const [active, setActive] = useState({
    nft: false,
    contact: false,
    community: false,
  });

  const ref = useRef<HTMLSpanElement | null>(null);
  const [openHamburger, setOpenHamburger] = useState(false);

  //Доделать мисс клик

  return (
    <nav className={styles.nav}>
      <Logo />
      <span ref={ref}>
        <GiHamburgerMenu
          onClick={() => setOpenHamburger(!openHamburger)}
          className="flex xl:hidden"
        />
      </span>
      <HamburgerMenu
        setActive={setActive}
        active={active}
        initialState={openHamburger}
        setInitialState={setOpenHamburger}
      />

      <ol className={styles.list}>
        <NavLink to="/">
          <li className={styles.item}>Главная</li>
        </NavLink>
        <li
          className={styles.item}
          onClick={() => setActive({ ...active, nft: !active.nft })}
        >
          NFT
          <DropdownGroup initialState={active.nft}>
            <DropdownItem link="/marketplace" name="Маркетплейс" />
            <DropdownItem link="/auction" name="Аукцион" />
            <DropdownItem link="/ranking" name="Рейтинг" />
          </DropdownGroup>
          {active.nft ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <RiArrowUpSLine />
            </motion.span>
          ) : (
            <motion.span
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <RiArrowUpSLine />
            </motion.span>
          )}
        </li>
        <li
          className={styles.item}
          onClick={(): void =>
            setActive({ ...active, community: !active.community })
          }
        >
          Комьюнити
          <DropdownGroup initialState={active.community}>
            <DropdownItem link="/blog" name="Блог" />
            <DropdownItem link="/activity" name="Активность" />
          </DropdownGroup>
          {active.community ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <RiArrowUpSLine />
            </motion.span>
          ) : (
            <motion.span
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <RiArrowUpSLine />
            </motion.span>
          )}
        </li>
        <li
          className={styles.item}
          onClick={(): void =>
            setActive({ ...active, contact: !active.contact })
          }
        >
          Контакты
          <DropdownGroup initialState={active.contact}>
            <DropdownItem link="/faq" name="FAQ" />
            <DropdownItem link="/help" name="Центр помощи" />
            <DropdownItem link="/contact" name="Связаться" />
          </DropdownGroup>
          {active.contact ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <RiArrowUpSLine />
            </motion.span>
          ) : (
            <motion.span
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <RiArrowUpSLine />
            </motion.span>
          )}
        </li>
      </ol>
      <span className={styles.wrapper}>
        <Button text="Подключить кошелек" icon={<BiWallet />} link="/connect" />
      </span>
    </nav>
  );
};

export default HeaderNav;
