interface item {
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

interface cartItem {
  id: number;
  title: string;
  imgSrc: string;
  price: number;
  count: number;
}

export const CreateCartItem = (item: item, cart: Array<cartItem>) => {
  let cart_copy = [...cart];
  if (cart_copy.some((data) => data.id === item.id)) {
    return AddCartItem(item.id, cart);
  } else {
    return [
      {
        id: item.id,
        title: item.title,
        imgSrc: item.image,
        price: item.price,
        count: 1,
      },
      ...cart,
    ];
  }
};

export const SubCartItem = (id: number, cart: Array<cartItem>) => {
  let cart_copy = [...cart];
  const index = cart_copy.findIndex((i) => i.id == id);
  if (cart_copy[index].count !== 1) {
    cart_copy[index] = {
      ...cart_copy[index],
      count: cart_copy[index].count - 1,
    };
  }
  return cart_copy;
};

export const AddCartItem = (id: number, cart: Array<cartItem>) => {
  let cart_copy = [...cart];
  const index = cart_copy.findIndex((i) => i.id == id);
  if (cart_copy[index].count !== 100) {
    cart_copy[index] = {
      ...cart_copy[index],
      count: cart_copy[index].count + 1,
    };
  }
  return cart_copy;
};

export const DelCartItem = () => {
  // const setData = useRecoilState(productListState);
  // setData(1);
};
