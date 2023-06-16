type TypeFilterList = {
  icon: string;
  category: number;
  title: string;
};
export const filterList: TypeFilterList[] = [
  {
    icon: "../img/ui/Filter/listing.svg",
    category: 1,
    title: "Листинг",
  },
  {
    icon: "../img/ui/Filter/like.svg",
    category: 2,
    title: "Лайки",
  },
  {
    icon: "../img/ui/Filter/purchases.svg",
    category: 3,
    title: "Покупки",
  },
  {
    icon: "../img/ui/Filter/sales.svg",
    category: 4,
    title: "Скидки",
  },
  {
    icon: "../img/ui/Filter/transfer.svg",
    category: 5,
    title: "Обмен",
  },
  {
    icon: "../img/ui/Filter/favourite.svg",
    category: 6,
    title: "Избранное",
  },
  {
    icon: "../img/ui/Filter/bids.svg",
    category: 7,
    title: "Ставки",
  },
  {
    icon: "../img/ui/Filter/follow.svg",
    category: 8,
    title: "Подписки",
  },
];
