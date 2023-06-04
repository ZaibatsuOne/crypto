import TypeUser from "./TypeUser";

type TypePopularImages = {
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  imageFour: string;
  imageFive: string;
};

export interface TypePopularCollection extends TypeUser {
  id: number;
  title: string;
  img: TypePopularImages;
}

export const popularCollections: TypePopularCollection[] = [
  {
    id: 1,
    title: "Creative Art Collection",
    userAvatar: "./img/user/1.png",
    userName: "Ralph Garraway",
    userType: "",
    img: {
      imageOne: "./img/nft/PopularCollection/First/1.png",
      imageTwo: "./img/nft/PopularCollection/First/2.png",
      imageThree: "./img/nft/PopularCollection/First/3.png",
      imageFour: "./img/nft/PopularCollection/First/4.png",
      imageFive: "./img/nft/PopularCollection/First/5.png",
    },
  },
  {
    id: 2,
    title: "Colorful Abstract",
    userAvatar: "./img/user/2.png",
    userName: "Ralph Garraway",
    userType: "",
    img: {
      imageOne: "./img/nft/PopularCollection/Second/1.png",
      imageTwo: "./img/nft/PopularCollection/Second/2.png",
      imageThree: "./img/nft/PopularCollection/Second/3.png",
      imageFour: "./img/nft/PopularCollection/Second/4.png",
      imageFive: "./img/nft/PopularCollection/Second/5.png",
    },
  },
  {
    id: 3,
    title: "Creative Art Collection",
    userAvatar: "./img/user/3.png",
    userName: "Ralph Garraway",
    userType: "",
    img: {
      imageOne: "./img/nft/PopularCollection/Third/1.png",
      imageTwo: "./img/nft/PopularCollection/Third/2.png",
      imageThree: "./img/nft/PopularCollection/Third/3.png",
      imageFour: "./img/nft/PopularCollection/Third/4.png",
      imageFive: "./img/nft/PopularCollection/Third/5.png",
    },
  },
];
