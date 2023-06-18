import { FC } from "react";

type RecentPostProps = {
  title: string;
  excerpt: string;
  img: string;
};

const RecentPost: FC<RecentPostProps> = ({ title, excerpt, img }) => {
  return (
    <>
      <img src={img} alt={title} className="w-12 h-11 object-cover" />
      <div>
        <h6 className="text-sm max-w-[250px] whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </h6>
        <div className="flex justify-between items-center">
          <p className="text-sm max-w-[124px] whitespace-nowrap overflow-hidden text-ellipsis">
            {excerpt}
          </p>
          <p className="text-xs">August 10, 2021</p>
        </div>
      </div>
    </>
  );
};

export default RecentPost;
