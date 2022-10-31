import { useRecoilValue } from "recoil";
import {
  clothingProductList,
  jeweleryProductList,
  electronicsProductList,
} from "../state/State";
import ProductList from "../components/ProductList";
import Breadcrumbs from "../components/Breadcrumbs";

interface dataProps {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}
interface SendData {
  title: string;
  data: Array<dataProps>;
}

interface MyComponentProps {
  keyword: string;
}

const CategoryPage = ({ keyword }: MyComponentProps) => {
  const array: any = {
    패션: { title: "패션", data: useRecoilValue(clothingProductList) },
    액세서리: { title: "액세서리", data: useRecoilValue(jeweleryProductList) },
    디지털: { title: "디지털", data: useRecoilValue(electronicsProductList) },
  };
  const sendData: SendData = array[keyword];
  return (
    <>
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <Breadcrumbs depth1={"홈"} depth2={keyword} />
        <ProductList
          title={sendData.title}
          dataScroll={false}
          dataList={sendData.data}
        />
      </section>
    </>
  );
};

export default CategoryPage;
