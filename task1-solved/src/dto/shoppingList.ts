import { IProductNameDto } from './product';

export interface IShoppingEntryDto {
  product: IProductNameDto;
  amount: number;
}

export interface IShoppingListDto {
  id: string;
  name: string;
  entries: IShoppingEntryDto[];
}
