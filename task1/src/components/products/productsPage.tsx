import * as React from 'react';
import { productApi } from '../../api/productApi';
import { IProductName } from '../../domain/product';
// import ProductListItem from './productListItem';
import './productsPage.css';

interface IProductsPageState {
  products: IProductName[];
}

class ProductsPage extends React.Component<{}, IProductsPageState> {

    constructor(props: {}) {
      super(props);
      this.state = {products: []};
    }

    public async componentWillMount() {
      if (!this.state.products.length) {
        this.loadData();
      }
    }

    public render(): React.ReactNode {
      /* legg til produkt navn rendering (bruk gjerne ProductListItem)*/

      return (
        <div className='product-page'>
          <h1>Produkter</h1>
        </div>
      );
    }

    private async loadData() {
      const products = await productApi.getProducts();
      this.setState({ products });
    }
}

export default ProductsPage;
