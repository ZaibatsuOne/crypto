import { TypeUser } from "./User.type";

export type TypePopularImages = {
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  imageFour: string;
  imageFive: string;
};

export interface IPopularCollection extends TypeUser {
  id: number;
  title: string;
  img: TypePopularImages;
}
