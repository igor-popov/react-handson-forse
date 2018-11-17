import { IProductName } from './product';

export interface IShoppingEntry {
  product: IProductName;
  amount: number;
}

export interface IShoppingList {
  id: string;
  name: string;
  entries: IShoppingEntry[];
}
