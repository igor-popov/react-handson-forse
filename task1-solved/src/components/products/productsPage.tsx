import * as React from 'react';
import { productApi } from '../../api/productApi';
import { IProductName } from '../../domain/product';
import ProductListItem from './productListItem';
import './productPage.css';

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
        const products = await productApi.getProducts();
        this.setState({ products });
      }
    }

    public render(): React.ReactNode {
      return (
        <div className='product-page'>
          <h1>Produkter</h1>
          {this.state.products.map(p => this.renderProduct(p))}
        </div>
      );
    }

    private renderProduct(product: IProductName) {
      return (
        <ProductListItem product={product}/>
      );
    }
}

export default ProductsPage;
