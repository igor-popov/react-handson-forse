import * as React from 'react';
// import { Link } from 'react-router-dom';
import { IProductName } from '../../domain/product';

interface IProductsListItemProps {
  product: IProductName;
}

class ProductsListItem extends React.Component<IProductsListItemProps, {}> {

    public render(): React.ReactNode {

      /*
      1. implementer rendering med noen styler baser på innehold, f.eks gjør Ketchup rød eller Melk større
      2. legg til Link til produkt side 
      */

      return (<div/>);
    }
}

export default ProductsListItem;
