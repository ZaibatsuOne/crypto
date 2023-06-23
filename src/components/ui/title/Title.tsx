import { FC } from "react";

type TypeTitleProps = {
  title: string;
};
const Title: FC<TypeTitleProps> = ({ title }) => {
  return <h4 className="text-center xl:text-start">{title}</h4>;
};

export default Title;
