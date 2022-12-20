import ProductItem from "./ProductItem";



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

interface MyComponentProps {
  title: string;
  dataScroll: boolean;
  dataList: Array<dataProps>;
  dataLimit: number;
}

const ProductList = ({
  title,
  dataScroll,
  dataList,
  dataLimit
}: MyComponentProps) => {
  return (
    <>
      <h2 className="mt-10 mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
        {title}
      </h2>
      <div
        className=" grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list "
        data-scroll={dataScroll}>
        {dataList.map(
          (d, idx) => dataLimit > idx && <ProductItem key={idx} item={d} />
        )}
      </div>
    </>
  );
};

export default ProductList;
