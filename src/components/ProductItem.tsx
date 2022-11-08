import { Link } from "react-router-dom";

interface MyComponentProps {
  item: {
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
  };
}

const ProductItem = ({ item }: MyComponentProps) => {
  const clickUrl: string = `/product/${item.id}`;
  return (
    <>
      <Link
        className="group card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
        to={clickUrl}>
        <figure className="flex h-80 bg-white overflow-hidden">
          <img
            src={item.image}
            alt="상품 이미지"
            className="group-hover:max-h-[60%] group-hover:max-w-[60%]  duration-300 max-h-[50%] max-w-[50%]"
          />
        </figure>
        <div className="card-body bg-gray-100 dark:bg-gray-700">
          <p className="card-title text-base overflow-hidden">{item.title}</p>
          <p className="text-base">${item.price}</p>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
