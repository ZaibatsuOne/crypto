import { socialLink } from "../../../ts/Social";
import { myAccout, resources, company } from "../../../ts/Footer";
import { NavLink } from "react-router-dom";
import Logo from "../../ui/logo/Logo";
import styles from "./Footer.module.scss";

const Footer = () => {
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
            {myAccout.map((myAccoutItem, index) => (
              <NavLink to={myAccoutItem.link}>
                <li className={styles.item} key={index}>
                  {myAccoutItem.subtitle}
                </li>
              </NavLink>
            ))}
          </ul>
          <ul className={styles.list}>
            <p className={styles.title}>Ресурсы</p>
            {resources.map((resourcesItem, index) => (
              <NavLink to={resourcesItem.link}>
                <li className={styles.item} key={index}>
                  {resourcesItem.subtitle}
                </li>
              </NavLink>
            ))}
          </ul>
          <ul className={styles.list}>
            <p className={styles.title}>Компания</p>
            {company.map((companyItem, index) => (
              <NavLink to={companyItem.link}>
                <li className={styles.item} key={index}>
                  {companyItem.subtitle}
                </li>
              </NavLink>
            ))}
          </ul>
          <div className={styles.subscribe}>
            <p className={styles.title}>Оформить подписку</p>
            <span>
              <input
                className={styles.input}
                placeholder="Info@yourgmail.com"
              />
              <button className={styles.button}>
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.915334 0.188759C1.23957 -0.0449367 1.67182 -0.0631242 2.01454 0.142509L17.0145 9.14251C17.3157 9.32323 17.5 9.64874 17.5 10C17.5 10.3513 17.3157 10.6768 17.0145 10.8575L2.01454 19.8575C1.67182 20.0631 1.23957 20.0449 0.915334 19.8112C0.591098 19.5775 0.437155 19.1732 0.523857 18.7831L2.25343 11L7.5 11C8.05228 11 8.5 10.5523 8.5 10C8.5 9.44772 8.05228 9 7.5 9L2.25343 9L0.523857 1.21693C0.437155 0.826771 0.591098 0.422456 0.915334 0.188759Z"
                    fill="white"
                  />
                </svg>
              </button>
            </span>
            <ul className={styles.social}>
              {socialLink.map((socialLink, index) => (
                <li key={index}>
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
