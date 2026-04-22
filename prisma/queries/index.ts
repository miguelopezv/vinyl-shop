import {
  createProduct,
  findProductsByCategory,
  findProductsByNameOrCategory,
  getProductById,
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
  getProductById,
  getProducts,
  getProductsCount,
};
export type { ProductsWithCategory };
