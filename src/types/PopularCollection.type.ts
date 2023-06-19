import { User } from "./User.type";

type TypePopularImages = {
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  imageFour: string;
  imageFive: string;
};

export interface IPopularCollection extends User {
  id: number;
  title: string;
  img: TypePopularImages;
}
