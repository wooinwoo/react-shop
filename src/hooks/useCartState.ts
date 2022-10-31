import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartState, cartCountState, cartTotalPriceState } from "../state/State";

interface cart {
  id: number;
  title: string;
  imgSrc: string;
  price: number;
  count: number;
}
const useCartState = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const setCartCount = useSetRecoilState(cartCountState);
  const setCartTotalPrice = useSetRecoilState(cartTotalPriceState);

  useEffect(() => {
    const data: any = localStorage.getItem("cart");
    console.log(data, JSON.parse(data));
    setCart(data === null ? [] : JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(localStorage.getItem("cart"));
    let sumCount = 0,
      sumPrice = 0;
    cart.map((item: cart) => (sumCount += item.count));
    setCartCount(sumCount);
    cart.map((item: cart) => (sumPrice += item.price));
    setCartTotalPrice(sumPrice);
  }, [cart]);
};

export default useCartState;
