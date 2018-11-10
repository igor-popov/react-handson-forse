import * as React from 'react';
import { IProduct } from '../../domain/product';
// import { productApi } from '../../api/productApi';

import { Wait } from '..//shared/wait';
// import { NumberEditor } from '..//shared/numberEditor';
// import { TextEditor } from '../shared/textEditor';
// import { Property } from '../shared/property';
// import { SaveButton } from '../shared/saveButton';
import { BackButton } from '../shared/backButton';

import './productPage.css';

interface IProductPageProps {
    match: any;
    history: any;
}

interface IProductPageState {
  product?: IProduct;
}

class ProductPage extends React.Component<IProductPageProps, IProductPageState> {

    constructor(props: IProductPageProps) {
      super(props);
      this.state = {};
    }

    public async componentWillMount() {
        // const productId = this.props.match.params.id;
    }

    public render(): React.ReactNode {
      /*
        1. Legg til henting produkt fra api
        2. Legg til redigering for produkt (du kan bruke TextEditor og NumberEditor hvis du vil)
        3. Legg til lagring
        4. Legg til bekreftelse på at produkt ble lagret
      */
      if (!this.state.product) {
        return (
          <Wait text='Loading'/>
        );
      }

      const product = this.state.product;

      return (
        <div>
          <BackButton history={this.props.history}/>
          <h1>{product.name}</h1>
        </div>
      );
    }
}

export default ProductPage;