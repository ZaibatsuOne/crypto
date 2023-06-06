import styles from "./Footer.module.scss";
import { socialLink } from "../../../ts/Social";
import { myAccout, resources, company } from "../../../ts/Footer";
import { NavLink } from "react-router-dom";
import Logo from "../../ui/logo/Logo";
import { FC } from "react";
import Input from "../../ui/Input/Input";
import { BiPaperPlane } from "react-icons/bi";
const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <div className={styles.logo}>
            <Logo />
            <p>
              Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non,
              fugit totam vel laboriosam vitae.
            </p>
          </div>
          <ul className={styles.list}>
            <p className={styles.title}>Мой аккаунт</p>
            {myAccout.map((myAccoutItem) => (
              <NavLink to={myAccoutItem.link}>
                <li className={styles.item} key={myAccoutItem.subtitle}>
                  {myAccoutItem.subtitle}
                </li>
              </NavLink>
            ))}
          </ul>
          <ul className={styles.list}>
            <p className={styles.title}>Ресурсы</p>
            {resources.map((resourcesItem) => (
              <NavLink to={resourcesItem.link}>
                <li className={styles.item} key={resourcesItem.subtitle}>
                  {resourcesItem.subtitle}
                </li>
              </NavLink>
            ))}
          </ul>
          <ul className={styles.list}>
            <p className={styles.title}>Компания</p>
            {company.map((companyItem) => (
              <NavLink to={companyItem.link}>
                <li className={styles.item} key={companyItem.subtitle}>
                  {companyItem.subtitle}
                </li>
              </NavLink>
            ))}
          </ul>
          <div className={styles.subscribe}>
            <p className={styles.title}>Оформить подписку</p>
            <Input placeholder="Info@yourgmail.com" icon={<BiPaperPlane />} />
            <ul className={styles.social}>
              {socialLink.map((socialLink) => (
                <li key={socialLink.name}>
                  <a href={socialLink.link} target="_blank">
                    <img
                      src={socialLink.icon}
                      className={styles.icon}
                      alt={socialLink.name}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
