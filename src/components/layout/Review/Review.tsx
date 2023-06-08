import { FC } from "react";

interface IReviewProps {
  nameUser: string;
  commentaryUser: string;
}

const Review: FC<IReviewProps> = ({ nameUser, commentaryUser }) => {
  return (
    <>
      <header>
        <h6>Автор:</h6>
        <p className="text-caption-1">{nameUser}</p>
      </header>
      <footer>
        <h6>Комментарий:</h6>
        <p className="text-caption-1">{commentaryUser}</p>
      </footer>
    </>
  );
};

export default Review;
