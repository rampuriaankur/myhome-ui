import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import ProductForm from "./components/ProductForm.js";
import manageProduct from "./components/ManageProduct.js";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ProductDetialsPage from "./components/ProductDetailsPage.js";

import React, { useState } from "react";
//import { Collapse, Button, CardBody, Card } from "reactstrap";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="my-custom-container">
        <div className="banner" />
        <div className="body">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={ProductDetialsPage}></Route>
              <Route
                path="/appliances"
                exact
                component={ProductDetialsPage}
              ></Route>
              <Route
                path="/manageProduct/:id"
                component={manageProduct}
              ></Route>
              <Route path="/manageProduct" component={manageProduct}></Route>
              <Route path="/addProduct" component={ProductForm}></Route>
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </BrowserRouter>
        </div>

        <div id="footer" className="footer fixed-bottom">
          <Footer />
        </div>
      </div>
      {}
    </React.Fragment>
  );
}

export default App;
