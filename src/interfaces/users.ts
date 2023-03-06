import { Product } from "./products";

export interface User {
  name?: string;
  age?: number;
  friends?: string[];
  status?: string;
}

export interface UserOrders {
  id: string;
  products: Product[];
  address: string;
}
