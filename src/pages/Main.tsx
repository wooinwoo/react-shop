import { useRecoilValue } from "recoil";
import { productListState } from "../state/State";
import ImgCarousel from "../components/ImgCarousel";
const Main = () => {
  const productList = useRecoilValue(productListState);

  return <ImgCarousel />;
};

export default Main;
