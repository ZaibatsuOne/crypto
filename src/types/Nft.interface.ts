import { TypeUser } from "./User.type";

export interface INft extends TypeUser {
  id: number;
  img: string;
  title: string;
  price: number;
  category: number;
  user: TypeUser;
}
