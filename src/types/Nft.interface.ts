import { TypeUser } from "./User.type";

export interface INft {
  id: number;
  img: string;
  title: string;
  price: number;
  category: number;
  user: TypeUser[];
}
