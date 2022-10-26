import { useRecoilValue } from "recoil";
import {
  clothingProductList,
  jeweleryProductList,
  electronicsProductList,
} from "../state/State";
import ImgCarousel from "../components/ImgCarousel";
import ProductList from "../components/ProductList";

interface MyComponentProps {
  data: Array<any>;
}

const MainPage = () => {
  const clothingList = useRecoilValue(clothingProductList);
  const jeweleryList = useRecoilValue(jeweleryProductList);
  const electronicsList = useRecoilValue(electronicsProductList);
  console.log(clothingProductList);
  return (
    <>
      <ImgCarousel />
      <section className="pt-15 p-10">
        <ProductList title="패션" dataScroll={true} dataList={clothingList} />
        <ProductList
          title="액세서리"
          dataScroll={true}
          dataList={jeweleryList}
        />
        <ProductList
          title="디지털"
          dataScroll={true}
          dataList={electronicsList}
        />
      </section>
    </>
  );
};

export default MainPage;