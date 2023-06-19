import { FC } from "react";
import { TypeReview } from "src/types/Review.type";

const Review: FC<TypeReview> = ({ nameUser, commentaryUser }) => {
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
