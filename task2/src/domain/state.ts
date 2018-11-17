import { IProduct } from './product';

export interface IProductsState {
  all?: IProduct[];
  errorMessage?: string;
}

export interface ICurrentProductState {
  current?: IProduct;
  isJustSaved?: boolean;
  errorMessage?: string;
}

export interface IAppState {
  products: IProductsState;
  product: ICurrentProductState;
}
