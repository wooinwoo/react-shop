import axios from "axios";
import { useSetRecoilState } from "recoil";
import { productListState } from "../state/State";

const GetProductList = () => {
  const setData = useSetRecoilState(productListState);
  axios({
    method: "GET",
    url: "https://fakestoreapi.com/products",
  })
    .then((res) => {
      setData(res.data);
    })
    .catch((error) => alert(`데이터를 불러들이기 실패.\n${error}`));
};

export default GetProductList;
