import { addToCart } from "./add";
import { deleteCart } from "./delete";
import { getSingleCart, listCart } from "./get";

export const ORDER_CART = {
    list: listCart,
    single: getSingleCart,
    add: addToCart,
    delete: deleteCart,
};
