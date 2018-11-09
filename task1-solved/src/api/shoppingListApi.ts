import {delay} from './delay';
import { IShoppingListDto } from '../dto/shoppingList';
import { IShoppingList } from '../domain/shoppingList';

class ShoppingListApi {
  private shoppingList: IShoppingListDto = {id: 'ABC123', name: 'Min liste', entries: []};

  public async getShoppingList(): Promise<IShoppingList> {
    return await delay(() => ({
      id: this.shoppingList.id, entries: this.shoppingList.entries, name: this.shoppingList.name
    }));
  }

  public async saveShoppingList(list: IShoppingList): Promise<void> {
    await delay(() => { this.shoppingList = {id: list.id, entries: list.entries, name: list.name};});
  }

}

export const shoppingListApi = new ShoppingListApi();
