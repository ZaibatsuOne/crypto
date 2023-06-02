import NftItem from "../../nft/NftItem";
import Title from "../../ui/title/Title";
import Slider from "react-slick";
const Homepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <section>
      <section>
        <Title title="Аукцион" />
        <NftItem />

        <Slider {...settings}></Slider>
      </section>
    </section>
  );
};

export default Homepage;
