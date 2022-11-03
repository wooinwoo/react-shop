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
  checked: boolean;
}

export const CreateItem = (item: item, cart: Array<cartItem>) => {
  let cart_copy = [...cart];
  if (cart_copy.some((data) => data.id === item.id)) {
    return AddItem(item.id, cart);
  } else {
    return [
      {
        id: item.id,
        title: item.title,
        imgSrc: item.image,
        price: item.price,
        count: 1,
        checked: true,
      },
      ...cart,
    ];
  }
};

export const SubItem = (id: number, cart: Array<cartItem>) => {
  let cart_copy = [...cart];
  const index = cart_copy.findIndex((i) => i.id == id);
  if (cart_copy[index].count !== 0) {
    cart_copy[index] = {
      ...cart_copy[index],
      count: cart_copy[index].count - 1,
    };
  }
  return cart_copy;
};

export const UserInputItemCount = (
  id: number,
  cart: Array<cartItem>,
  value: string
) => {
  let cart_copy = [...cart];
  const index = cart_copy.findIndex((i) => i.id == id);
  let count;
  if (Number(value) > 100) {
    count = 100;
  } else if (Number(value) < 1) {
    count = 0;
  } else {
    count = Number(value);
  }

  cart_copy[index] = {
    ...cart_copy[index],
    count: count,
  };
  return cart_copy;
};

export const AddItem = (id: number, cart: Array<cartItem>) => {
  let cart_copy = [...cart];
  const index = cart_copy.findIndex((i) => i.id == id);
  if (cart_copy[index].count !== 100) {
    cart_copy[index] = {
      ...cart_copy[index],
      count: cart_copy[index].count + 1,
    };
  } else {
    alert("상품당 최대 주문 수량은 100개입니다.");
  }
  return cart_copy;
};

export const DelItem = (cart: Array<cartItem>) => {
  return cart.filter((item) => !item.checked);
};

export const OnCheckItem = (id: number, cart: Array<cartItem>) => {
  let cart_copy = [...cart];
  const index = cart_copy.findIndex((i) => i.id == id);
  cart_copy[index] = {
    ...cart_copy[index],
    checked: !cart_copy[index].checked,
  };
  return cart_copy;
};
