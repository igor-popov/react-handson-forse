import { IProduct, IProductName } from '../domain/product';
import { IProductDto } from '../dto/product';
import {delay} from './delay';

class ProductApi {
  private products: IProductDto[] = [
    {id: 'AAA123', name: 'Melk', weight: 1},
    {id: 'AAA126', name: 'Brød', weight: 0.6},
    {id: 'AAA128', name: 'Ketchup', weight: 1.5}
  ];

  public async getProducts(): Promise<IProductName[]> {
    return await delay(() => this.products.map(p => ({name: p.name, id: p.id})));
  }

  public async getProductsWithWeight(): Promise<IProduct[]> {
    return await delay(() => this.products.map(p => ({name: p.name, id: p.id, weight: p.weight})));
  }

  public async getProduct(id: string): Promise<IProduct> {
    return await delay(() => {
      const product: IProduct|undefined = this.products.filter(p => p.id === id).pop();
      if (!product) {
        throw new Error(`Produkt finnes ikke for id ${id}`);
      }
      return product;
    });
  }

  public async upsertProduct(product: IProduct): Promise<void> {
    await delay(() => {
      const existingProduct = this.products.find(p => p.id === product.id);
      if (!existingProduct) {
        this.products.push(product);
      } else {
        existingProduct.name = product.name;
        existingProduct.weight = product.weight;
      }
    });
  }
}

export const productApi = new ProductApi();
