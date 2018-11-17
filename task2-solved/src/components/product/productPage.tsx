import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../../domain/state';
import * as constants from './constants';

import { IProduct } from '../../domain/product';

import { Wait } from '..//shared/wait';
import { NumberEditor } from '..//shared/numberEditor';
import { TextEditor } from '../shared/textEditor';
import { Property } from '../shared/property';
import { SaveButton } from '../shared/saveButton';
import { BackButton } from '../shared/backButton';

import './productPage.css';

interface IProductPageProps {
  match: any;
  history: any;

  product: IProduct;
  isJustSaved: boolean;

  loadProduct: (productId: string) => any;
  saveProduct: (product: IProduct) => any;
}

interface IProductPageState {
  editableProduct?: IProduct;
}

class ProductPage extends React.Component<IProductPageProps, IProductPageState> {

    private propertyChangedMethod: (property: string) => (change: any) => void;
    
    constructor(props: IProductPageProps) {
      super(props);
      this.propertyChangedMethod = (property: string) => this.onChange.bind(this, property);
      this.onSave = this.onSave.bind(this);
      this.state = {};
    }

    public async componentWillMount() {

        const productId = this.props.match.params.id;
        if (!productId) {
          throw new Error('Page is requested without id');
        }

        if (!this.props.product || this.props.product.id !== productId) {
          this.props.loadProduct(productId);
        } else if (!this.state.editableProduct || this.state.editableProduct.id !== productId) {
          this.initializeEditableProduct(this.props.product);
        }
    }

    public componentWillReceiveProps(props: IProductPageProps) {
      let editableProductId = !this.state.editableProduct ? undefined : this.state.editableProduct.id;
      let originalProductId = !props.product ? undefined : props.product.id;

      if (!originalProductId) {
        return;
      }

      if (!editableProductId || editableProductId !== originalProductId) {
        this.initializeEditableProduct(props.product);
      }
    }

    public render(): React.ReactNode {

      const product = this.state.editableProduct;
      const isJustSaved = this.props.isJustSaved;

      if (!product) {
        return (
          <Wait text='Loading'/>
        );
      }

      return (
        <div>
          <BackButton history={this.props.history}/>
          <h1>{product.name}</h1>
          {isJustSaved ? <p>Saved!</p> : undefined}
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
          <SaveButton onClick={this.onSave}/>
        </div>
      );
    }

    private onChange(property: string, change: any) {
      const product = this.state.editableProduct;

      if (product) {
        const newState = {
          editableProduct: Object.assign({}, product)
        };
        newState.editableProduct[property] = change;
        this.setState(newState);
      }
    }

    private async onSave() {

      const product = this.state.editableProduct;

      if (!product) {
        throw new Error('Product is missing');
      }

      this.props.saveProduct(product);
    }

    private initializeEditableProduct(product: IProduct) {
      const newState = {
        editableProduct: Object.assign({}, product)
      };
      this.setState(newState);
    }
}


function mapStateToProps(state: IAppState) {
  let product: IProduct = state.product.current || {id: '', name: '', weight: 1} as IProduct;

  return {
    product: product,
    isJustSaved: !!state.product.isJustSaved
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    loadProduct: (productId: string) => dispatch({type: constants.PRODUCT_REQUEST_START, productId: productId}),
    saveProduct: (product: IProduct) => dispatch({type: constants.PRODUCT_SAVE_START, product: product}),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
