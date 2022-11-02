import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  cartState,
  cartCountState,
  cartTotalPriceState,
  checkAllState,
} from "../state/State";

interface cart {
  id: number;
  title: string;
  imgSrc: string;
  price: number;
  count: number;
  checked: boolean;
}
const useCartState = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const [checkAll, setCheckAll] = useRecoilState(checkAllState);
  const setCartCount = useSetRecoilState(cartCountState);
  const setCartTotalPrice = useSetRecoilState(cartTotalPriceState);

  useEffect(() => {
    const data: any = localStorage.getItem("cart");
    console.log(data, JSON.parse(data));
    console.log(data === null);
    setCart(data === null ? [] : JSON.parse(data));
  }, []);

  useEffect(() => {
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(localStorage.getItem("cart"));
    let sumCount = 0,
      sumPrice = 0;
    cart.map((item: cart) => (sumCount += item.count));
    setCartCount(sumCount);
    cart.map(
      (item: cart) => (sumPrice += item.checked ? item.price * item.count : 0)
    );
    setCartTotalPrice(sumPrice);

    setCheckAll(!cart.some((item: cart) => item.checked === false));
  }, [cart]);
};

export default useCartState;
