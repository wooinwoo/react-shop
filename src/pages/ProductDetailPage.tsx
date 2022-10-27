import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { productListState } from "../state/State";
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

const ProductDetailPage = () => {
  const url = window.location.href.split("/");
  const dataList: Array<dataProps> = useRecoilValue(productListState);

  const filterData = dataList.filter(
    (d) => String(d.id) === url[url.length - 1]
  )[0];
  const item: dataProps = filterData
    ? filterData
    : {
        id: 0,
        category: "initial",
        description: "",
        image: "",
        price: 0,
        rating: {
          rate: 0,
          count: 0,
        },
        title: "",
      };

  console.log(item);

  const category: any = {
    initial: "1",
    "men's clothing": "패션",
    "women's clothing": "패션",
    jewelery: "액세서리",
    electronics: "디지털",
  };

  return (
    <>
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <Breadcrumbs depth1={category[item.category]} depth2={item.title} />
        <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
          <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
            <img
              src={item.image}
              alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
              className="object-contain w-full h-72"
            />
          </figure>
          <div className="card-body px-1 lg:px-12">
            <h2 className="card-title">
              {item.title}
              <span className="badge badge-accent ml-2">NEW</span>
            </h2>
            <p>{item.description}</p>
            <div className="flex items-center mt-3">
              <div className="rating rating-half">
                {Array(10)
                  .fill(0)
                  .map((d, idx) => (
                    <input
                      key={idx}
                      type="radio"
                      name="rating-10"
                      className={
                        idx % 2 === 0
                          ? "bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
                          : "bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
                      }
                      disabled
                      checked={
                        Math.floor(item.rating.rate * 2) == idx + 1
                          ? true
                          : false
                      }
                    />
                  ))}
              </div>
              <div className="ml-2">
                {item.rating.rate} / {item.rating.count} 참여
              </div>
            </div>
            <p className="mt-2 mb-4 text-3xl">${item.price}</p>
            <div className="card-actions">
              <button className="btn btn-primary">장바구니에 담기</button>
              <Link className="btn btn-outline ml-1" to="/cart">
                장바구니로 이동
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
