import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import Details from './components/Details';
import Cart from './components/cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/footer';
import Admin from './components/admin/admin';
import Add from './components/admin/add';
import Remove from './components/admin/remove';
import { ProductProvider } from './context';



class App extends Component {
  render() {
    return (
     <ProductProvider>
       <React.Fragment>
       <Navbar />
       <Switch>
         <Route exact path="/" component={ProductsList} />
         <Route path="/details" component={Details} />
         <Route path="/cart" component={Cart} />
         <Route exact path="/admin" component={Admin} />
         <Route exact path="/admin/add" component={Add} />
         <Route exact path="/admin/remove" component={Remove} />
         <Route component={Default} />
       </Switch>
       <Footer />
       <Modal />
     </React.Fragment>
     </ProductProvider>
    );
  }
}

export default App;
