import { atom, selector } from "recoil";

export const productListState = atom({
  key: "productList",
  default: [],
});

const clothingProductList = selector({
  key: "clothingProductList", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const dataList = get(productListState);
    return dataList.filter((item) => item.category.includes("clothing"));
  },
});
const jeweleryProductList = selector({
  key: "jeweleryProductList", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const dataList = get(productListState);
    return dataList.filter((item) => item.category.includes("jewelery"));
  },
});
const electronicsProductList = selector({
  key: "electronicsProductList", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const dataList = get(productListState);
    return dataList.filter((item) => item.category.includes("electronics"));
  },
});
