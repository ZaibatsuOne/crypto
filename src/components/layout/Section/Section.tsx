import { FC } from "react";

type Props = {
  children: React.ReactNode;
};
const Section: FC<Props> = ({ children }) => {
  return <section className="flex flex-col gap-9 relative">{children}</section>;
};

export default Section;
