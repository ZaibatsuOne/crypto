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

export const navNFT = [
  {
    title: "NFT",
    dropdown: [
      {
        subtitle: "Маркетплейс",
        link: "/faq",
      },
      {
        subtitle: "Аукцион",
        link: "/auction",
      },
    ],
  },
];
export const navCommunity = [
  {
    title: "Коммьюнити",
    dropdown: [
      {
        subtitle: "Блог",
        link: "/blog",
      },
      {
        subtitle: "Аукцион",
        link: "/auction",
      },
    ],
  },
];
export const navContacs = [
  {
    title: "Контакты",
    dropdown: [
      {
        subtitle: "FAQ",
        link: "/faq",
      },
      {
        subtitle: "Центр помощи",
        link: "/help",
      },
      {
        subtitle: "Связаться",
        link: "/contact",
      },
    ],
  },
];
