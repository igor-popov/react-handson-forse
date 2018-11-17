import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../../domain/state';
// import * as constants from './constants';

import { IProductName } from '../../domain/product';
import ProductListItem from './productListItem';
import './productsPage.css';

import { Wait } from '..//shared/wait';

interface IProductsPageProperties {
  products: IProductName[];
  loadProducts: () => void;
}

class ProductsPage extends React.Component<IProductsPageProperties, {}> {

    public async componentWillMount() {
      if (!this.props.products || !this.props.products.length) {
        this.props.loadProducts();
    }
    }

    public render(): React.ReactNode {

      const products = this.props.products;

      if (!products || !products.length) {
        return (
          <Wait text='Loading'/>
        );
      }

      return (
        <div className='products-page'>
          <h1>Produkter</h1>
          {products.map(p => this.renderProduct(p))}
        </div>
      );
    }

    private renderProduct(product: IProductName) {
      return (
        <ProductListItem product={product}/>
      );
    }
}

function mapStateToProps(state: IAppState) {
  return {
     products: []
  };
}

function mapDispatchToProps(dispatch: (action: any) => void) {
  return {
    loadProducts: () => void 0 //dispatch({type: })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);

