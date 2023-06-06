import { FC } from "react";
import { NavLink } from "react-router-dom";

const Logo: FC = () => {
  return (
    <NavLink className="flex gap-[10px] items-center text-4xl font-bold" to="/">
      <svg
        width="30"
        height="41"
        viewBox="0 0 30 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.75 0C10.2255 5.0344 11.25 19.2187 11.25 19.2187C11.25 19.2187 7.5 17.9375 7.5 12.1719C3.02601 14.831 0 19.9421 0 25.625C0 34.1164 6.71572 41 15 41C23.2843 41 30 34.1164 30 25.625C29.9999 13.1328 18.75 10.5703 18.75 0V0ZM16.3176 35.7023C13.3034 36.4725 10.2505 34.5924 9.49887 31.5027C8.74736 28.4131 10.5816 25.2838 13.596 24.5135C20.8732 22.6538 21.7852 18.4592 21.7852 18.4592C21.7852 18.4592 25.4141 33.3775 16.3176 35.7023Z"
          fill="url(#paint0_linear_1383_4158)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1383_4158"
            x1="26.25"
            y1="-1.74884e-06"
            x2="-5.52352"
            y2="31.3469"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E250E5" />
            <stop offset="1" stop-color="#4B50E6" />
          </linearGradient>
        </defs>
      </svg>
      Axies
    </NavLink>
  );
};

export default Logo;
