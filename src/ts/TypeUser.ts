type TypeUser = {
  id: number;
  userName: string;
  userAvatar: string;
  userType?: string;
  amount?: number;
};
export default TypeUser;

type User = {
  id: number;
  userName: string;
  userAvatar: string;
  amount: number;
};

interface NftFetch {
  id: number;
  img: string;
  title: string;
  price: number;
  category: number;
  user: User[];
}
