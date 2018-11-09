import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductsPage from './components/products/productsPage';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ProductsPage/>
      </div>
    );
  }
}

export default App;
