import * as React from 'react';
import { IProductName } from '../../domain/product';

interface IProductsListItemProps {
  product: IProductName;
}

class ProductsListItem extends React.Component<IProductsListItemProps, {}> {

    public render(): React.ReactNode {

      const styles: any = this.getStyles();

      return (
        <div style={styles} className={'product-list-item'}>
          <h2>{this.props.product.name}</h2>
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
