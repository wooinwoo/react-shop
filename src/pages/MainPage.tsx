import { useRecoilValue } from "recoil";
import {
  clothingProductList,
  jeweleryProductList,
  electronicsProductList,
} from "../state/State";
import ImgCarousel from "../components/ImgCarousel";
import ProductList from "../components/ProductList";

const MainPage = () => {
  const clothingList = useRecoilValue(clothingProductList);
  const jeweleryList = useRecoilValue(jeweleryProductList);
  const electronicsList = useRecoilValue(electronicsProductList);
  return (
    <>
      <ImgCarousel />
      <section className="pt-15 p-10">
        <ProductList
          title="패션"
          dataScroll={true}
          dataList={clothingList}
          dataLimit={4}
        />
        <ProductList
          title="액세서리"
          dataScroll={true}
          dataList={jeweleryList}
          dataLimit={4}
        />
        <ProductList
          title="디지털"
          dataScroll={true}
          dataList={electronicsList}
          dataLimit={4}
        />
      </section>
    </>
  );
};

export default MainPage;
