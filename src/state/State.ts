import { atom, selector } from "recoil";

export const productListState = atom({
  key: "productList",
  default: [
    {
      id: 0,
      category: "",
      description: "",
      image: "",
      price: 0,
      rating: {
        rate: 0,
        count: 0,
      },
      title: "",
    },
  ],
});

export const clothingProductList = selector({
  key: "clothingProductList", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const dataList = get(productListState);
    return dataList.filter((item) => item.category.includes("clothing"));
  },
});
export const jeweleryProductList = selector({
  key: "jeweleryProductList", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const dataList = get(productListState);
    return dataList.filter((item) => item.category.includes("jewelery"));
  },
});
export const electronicsProductList = selector({
  key: "electronicsProductList", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const dataList = get(productListState);
    return dataList.filter((item) => item.category.includes("electronics"));
  },
});

export const drawerState = atom({
  key: "drawerState",
  default: false,
});

export const itemState = atom({
  key: "itemState",
  default: {
    id: 0,
    category: "",
    description: "",
    image: "",
    price: 0,
    rating: {
      rate: 0,
      count: 0,
    },
    title: "",
  },
});

export const cartState = atom({
  key: "cartState",
  default: [],
});

export const cartCountState = atom({
  key: "cartCountState",
  default: 0,
});

export const cartTotalPriceState = atom({
  key: "cartTotalPriceState",
  default: 0,
});

export const checkAllState = atom({
  key: "checkAllState",
  default: false,
});
