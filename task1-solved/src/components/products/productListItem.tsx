import * as React from 'react';
import { Link } from 'react-router-dom';
import { IProductName } from '../../domain/product';

interface IProductsListItemProps {
  product: IProductName;
}

class ProductsListItem extends React.Component<IProductsListItemProps, {}> {

    public render(): React.ReactNode {

      const styles: any = this.getStyles();

      return (
        <div style={styles} className={'product-list-item'}>
          <h2><Link to={'/produkter/' + this.props.product.id}>{this.props.product.name}</Link></h2>
        </div>
      );
    }

    private getStyles(): any {
      switch (this.props.product.name) {
        case 'Ketchup':
          return {color: 'red', fontStyle: 'italic'};
        default:
          return {color: '#111111'};
      }
    }
}

export default ProductsListItem;
