import { FC } from "react";

type TypeTitleProps = {
  title: string;
};
const Title: FC<TypeTitleProps> = ({ title }) => {
  return <h4 className="text-center mx-auto xl:text-start xl:mx-0">{title}</h4>;
};

export default Title;
