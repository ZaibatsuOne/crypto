type TypeDropdownList = {
  dropItemOne: string;
  dropItemOneLink?: string;
  dropItemTwo?: string;
  dropItemTwoLink?: string;
  dropItemThree?: string;
  dropItemThreeLink?: string;
  dropItemFour?: string;
};
type TypeNavigation = {
  id?: number;
  title: string;
  link?: string;
  icon?: React.ComponentType | any;
  subtitle?: TypeDropdownList;
};

export const navList: TypeNavigation[] = [
  {
    title: "Главная",
  },
  {
    title: "NFT",
  },
  {
    title: "Активность",
  },
  {
    title: "Коммьюнити",
    subtitle: {
      dropItemOne: "Блог",
    },
  },
  {
    title: "Страницы",
  },
  {
    title: "Контакты",
    subtitle: {
      dropItemOne: "FAQ",
      dropItemTwo: "Центр помощи",
      dropItemThree: "Связаться",
    },
  },
];
