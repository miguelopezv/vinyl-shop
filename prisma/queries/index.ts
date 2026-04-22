import {
  createProduct,
  findProductsByCategory,
  findProductsByNameOrCategory,
  getProducts,
  getProductsCount,
  ProductsWithCategory,
} from "./products";

import { completeOrder, createOrder, findPendingOrders } from "./orders";

import { getCategories } from "./categories";
export {
  completeOrder,
  createOrder,
  createProduct,
  findPendingOrders,
  findProductsByCategory,
  findProductsByNameOrCategory,
  getCategories,
  getProducts,
  getProductsCount,
};
export type { ProductsWithCategory };
