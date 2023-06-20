import { TypeUser } from "./User.type";

export interface INft extends TypeUser {
  id: any;
  img: string;
  title: string;
  price: number;
  category: number;
  description?: string;
  user: TypeUser;
}
