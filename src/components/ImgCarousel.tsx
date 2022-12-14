import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

import fashionImg from "../assets/img_shop_fashion.jpeg";
import accessoryImg from "../assets/img_shop_accessory.jpeg";
import digitalImg from "../assets/img_shop_digital.jpeg";
import groceryImg from "../assets/img_shop_grocery.jpeg";

const ImgCarousel = () => {
  return (
    <Carousel
      infiniteLoop
      dynamicHeight={false}
      showThumbs={false}
      showStatus={false}>
      <div>
        <img alt="청바지 이미지" src={fashionImg} className="max-h-[80vh]" />
        <div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-white">
            물빠진 청바지!
          </h2>
          <p className="my-2 text-white">
            이제 막 도착한 패션 청바지를 구경해 보세요.
          </p>
          <Link className="btn btn-sm lg:btn-md mt-3" to="/fashion">
            바로가기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div>
        <img
          alt="악세사리 이미지"
          src={accessoryImg}
          className="max-h-[80vh]"
        />
        <div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-white">
            귀티 뿜뿜!
          </h2>
          <p className="my-2 text-white">다양한 악세사리를 둘러보세요.</p>
          <Link className="btn btn-sm lg:btn-md mt-3" to="/accessory">
            바로가기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </div>

      <div>
        <img
          alt="사람이 노트북 앞에서 폰을 들고 있는 이미지"
          src={digitalImg}
          className="max-h-[80vh]"
        />
        <div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-white">
            신속한 업무처리!
          </h2>
          <p className="my-2 text-white">다양한 디지털 상품을 둘러보세요.</p>
          <Link className="btn btn-sm lg:btn-md mt-3" to="/digital">
            바로가기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </div>

      <div>
        <img alt="식품 이미지" src={groceryImg} className="max-h-[80vh]" />
        <div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-white">
            신선한 식품!
          </h2>
          <p className="my-2 text-white">
            농장 직배송으로 더욱 신선한 식료품을 만나보세요.
          </p>
          <Link className="btn btn-sm lg:btn-md mt-3" to="/404">
            바로가기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </div>
    </Carousel>
  );
};

export default ImgCarousel;
