import styles from "./Coutdown.module.scss";
import { useState, useEffect, FC } from "react";
const Coutdown: FC = () => {
  const [countdown, setCountdown] = useState<string>("");

  useEffect(() => {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + Math.random() * 7);

    const updateCountdown = () => {
      const currentDate = new Date();
      const timeDifference = startDate.getTime() - currentDate.getTime();

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown(`${days}:${hours}:${minutes}:${seconds}`);

      if (timeDifference <= 0) {
        clearInterval(timerInterval);
        setCountdown("Время вышло!");
      }
    };

    const timerInterval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_85_232)">
          <path
            d="M11.875 0C7.61278 2.4558 8.12499 9.375 8.12499 9.375C8.12499 9.375 6.25 8.74999 6.25 5.93751C4.01301 7.23465 2.5 9.72785 2.5 12.5C2.5 16.6421 5.85786 20 10 20C14.1422 20 17.5 16.6421 17.5 12.5C17.5 6.40626 11.875 5.15624 11.875 0V0ZM10.6588 17.4157C9.1517 17.7915 7.62527 16.8744 7.24944 15.3672C6.87369 13.8601 7.79081 12.3336 9.298 11.9578C12.9366 11.0506 13.3926 9.00447 13.3926 9.00447C13.3926 9.00447 15.2071 16.2817 10.6588 17.4157Z"
            fill="#5142FC"
          />
        </g>
        <defs>
          <clipPath id="clip0_85_232">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p className={styles.time}>{countdown}</p>
    </div>
  );
};

export default Coutdown;
