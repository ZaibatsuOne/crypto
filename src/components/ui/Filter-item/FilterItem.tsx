import { FC } from "react";

type FilterItemProps = {
  icon: string;
  title: string;
};

const FilterItem: FC<FilterItemProps> = ({ icon, title }) => {
  return (
    <>
      <img src={icon} alt={title} />
      <p>{title}</p>
    </>
  );
};

export default FilterItem;
