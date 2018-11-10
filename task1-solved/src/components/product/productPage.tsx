import * as React from 'react';
import { IProduct } from '../../domain/product';
import { productApi } from '../../api/productApi';

import { Wait } from '..//shared/wait';
import { NumberEditor } from '..//shared/numberEditor';
import { TextEditor } from '../shared/textEditor';
import { Property } from '../shared/property';
import { SaveButton } from '../shared/saveButton';

interface IProductPageProps {
    match: any;
}

interface IProductPageState {
  product?: IProduct;
  isSaved: boolean;
}

class ProductPage extends React.Component<IProductPageProps, IProductPageState> {

    private propertyChangedMethod: (property: string) => (change: any) => void;
    private onSaveMethod: () => void;

    constructor(props: IProductPageProps) {
      super(props);
      this.propertyChangedMethod = (property: string) => this.onChange.bind(this, property);
      this.onSaveMethod = this.onSave.bind(this);
      this.state = {isSaved: true};
    }

    public async componentWillMount() {

        const productId = this.props.match.params.id;
        if (!productId) {
          throw new Error('Page is requested without id');
        }

        if (!this.state.product) {
            this.loadData(productId);
        }
    }

    private async loadData(productId: string) {
        const product: IProduct = await productApi.getProduct(productId);
        this.setState({ product: product, isSaved: false });
    }

    public render(): React.ReactNode {

      if (!this.state.product) {
        return (
          <Wait text='Loading'/>
        );
      }

      const product = this.state.product;

      return (
        <div>
          <h1>{product.name}</h1>
          {this.state.isSaved ? <p>Saved!</p> : undefined}
          <Property text='Navn'>
            <TextEditor
              value={product.name}
              placeholder='produktnavn'
              onChange={this.propertyChangedMethod('name')}
              focus={true}
            />
          </Property>
          <Property text='Vekt'>
            <NumberEditor
              value={product.weight}
              placeholder='produktvekt'
              onChange={this.propertyChangedMethod('weight')}
              units='kg'
            />
          </Property>
          <SaveButton onClick={this.onSaveMethod}/>
        </div>
      );
    }

    private onChange(property: string, change: any) {
      if (this.state.product) {
        const newState = {
          product: Object.assign({}, this.state.product)
        };
        newState.product[property] = change;
        this.setState(newState);
      }
    }

    private async onSave() {

      if (!this.state.product) {
        throw new Error('Product is missing');
      }

      const product = this.state.product;
      await productApi.upsertProduct(product);
      this.setState({ product: product, isSaved: true });

      window.setInterval(
        () => {
            this.setState({ product: product, isSaved: false });
        },
        2000);

    }
}

export default ProductPage;