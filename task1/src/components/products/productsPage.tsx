import * as React from 'react';
import { productApi } from '../../api/productApi';
import { IProductName } from '../../domain/product';
import ProductListItem from './productListItem';

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
        //initialize products from api productApi.getProducts();
      }
    }

    public render(): React.ReactNode {
      return (
        <div>
          <h1>Produkter</h1>
          {/*render products*/}
        </div>
      );
    }
}

export default ProductsPage;
