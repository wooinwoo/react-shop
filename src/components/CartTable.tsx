import { useRecoilState } from "recoil";
import { cartState } from "../state/State";

import { AddCartItem } from "../helpers/CartHelpers";
import { SubCartItem } from "../helpers/CartHelpers";

interface cartItem {
  id: number;
  title: string;
  imgSrc: string;
  price: number;
  count: number;
}

const CartTable = () => {
  const [cart, setCart] = useRecoilState(cartState);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="max-w-[50px]">
              <label className="flex items-center">
                <input type="checkbox" className="checkbox mr-2" />
                전체선택
              </label>
            </th>
            <th></th>
            <th></th>
            <th></th>
            <th>선택삭제</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item: cartItem) => (
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td className="px-0">
                <div className="flex items-center space-x-3 ">
                  <div className="flex items-center justify-center">
                    <div className="w-30 h-30 ">
                      <figure className="rounded-2xl p-4 bg-white">
                        <img
                          src={item.imgSrc}
                          alt={item.title}
                          className="object-contain w-10 h-10"
                        />
                      </figure>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold w-20 overflow-clip">
                      {item.title}
                    </div>
                  </div>
                </div>
              </td>
              <td>${item.price}</td>
              <td>
                <button
                  className="btn h-5"
                  onClick={() => setCart(SubCartItem(item.id, cart))}>
                  -
                </button>
                <input
                  className="input input-bordered text-center w-10 p-0"
                  value={item.count}
                />
                <button
                  className="btn h-5"
                  onClick={() => setCart(AddCartItem(item.id, cart))}>
                  +
                </button>
              </td>
              <th>${item.price * item.count}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
