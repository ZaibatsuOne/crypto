import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const SectionHeader: FC<Props> = ({ children }) => {
  return (
    <header className="  @apply flex justify-between items-center">
      {children}
    </header>
  );
};

export default SectionHeader;
