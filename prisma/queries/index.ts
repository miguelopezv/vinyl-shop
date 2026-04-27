import {
  createProduct,
  findProductsByCategory,
  findProductsByNameOrCategory,
  getProducts,
  getProductsCount,
  ProductsWithCategory,
} from "./products";

import {
  completeOrder,
  createOrder,
  findCompletedOrders,
  findPendingOrders,
} from "./orders";

import { getCategories } from "./categories";
export {
  completeOrder,
  createOrder,
  createProduct,
  findCompletedOrders,
  findPendingOrders,
  findProductsByCategory,
  findProductsByNameOrCategory,
  getCategories,
  getProducts,
  getProductsCount,
};
export type { ProductsWithCategory };
