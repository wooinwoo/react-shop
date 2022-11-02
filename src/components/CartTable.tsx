import { useRecoilState } from "recoil";
import { cartState, checkAllState } from "../state/State";

import {
  SubItem,
  UserInputItemCount,
  AddItem,
  DelItem,
  OnCheckItem,
} from "../helpers/CartHelpers";
import { Link } from "react-router-dom";
interface cartItem {
  id: number;
  title: string;
  imgSrc: string;
  price: number;
  count: number;
  checked: boolean;
}

const CartTable = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const [checkAll, setCheckAll] = useRecoilState(checkAllState);

  const ClickCheckAll = (checkState: boolean) => {
    let cartData: any = [];
    cart.map(
      (item: cartItem) =>
        (cartData = [
          ...cartData,
          {
            ...item,
            checked: checkState,
          },
        ])
    );
    setCart(cartData);
  };

  return (
    <div className="overflow-x-auto w-full max-h-[400px] ">
      <table className="table w-full block group">
        <thead>
          <tr>
            <th className="max-w-[50px] sticky top-0 group-first:z-20">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={checkAll}
                  onClick={() => {
                    ClickCheckAll(!checkAll);
                    setCheckAll(!checkAll);
                  }}
                />
                전체선택
              </label>
            </th>
            <th className="sticky top-0"></th>
            <th className="sticky top-0"></th>
            <th className="sticky top-0"></th>
            <th className="sticky top-0">
              <button onClick={() => setCart(DelItem(cart))}>선택삭제</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item: cartItem, idx) => (
            <tr key={idx}>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={item.checked}
                    onClick={() => setCart(OnCheckItem(item.id, cart))}
                  />
                </label>
              </th>
              <td className="px-0">
                <div className="flex items-center space-x-3 ">
                  <div className="flex items-center justify-center w-[100px] h-[100px]">
                    <div className=" ">
                      <figure className="rounded-2xl p-4 bg-white">
                        <Link to={"/product/" + item.id}>
                          <img
                            src={item.imgSrc}
                            alt={item.title}
                            className="object-contain w-[50px] h-[50px]"
                          />
                        </Link>
                      </figure>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold w-[50px] sm:w-[100px] md:w-[150px] lg:w-[300px] xl:w-[400px] xl2:w-[500px] text-ellipsis overflow-hidden">
                      <Link to={"/product/" + item.id}>{item.title}</Link>
                    </div>
                  </div>
                </div>
              </td>
              <td>${item.price}</td>
              <td>
                <button
                  className="btn h-5"
                  onClick={() => setCart(SubItem(item.id, cart))}>
                  -
                </button>
                <input
                  className="input input-bordered text-center w-10 p-0"
                  value={item.count}
                  onChange={(e) =>
                    setCart(UserInputItemCount(item.id, cart, e.target.value))
                  }
                />
                <button
                  className="btn h-5"
                  onClick={() => setCart(AddItem(item.id, cart))}>
                  +
                </button>
              </td>
              <th className="w-[120px]">
                ${parseFloat((item.price * item.count).toFixed(2))}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
