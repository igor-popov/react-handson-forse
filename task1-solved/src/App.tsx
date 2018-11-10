import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductsPage from './components/products/productsPage';
import ProductPage from './components/product/productPage';

class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact={true} path='/produkter' component={ProductsPage}/>
            <Route path='/produkter/:id' component={ProductPage}/>
            <Redirect to='/produkter'/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
