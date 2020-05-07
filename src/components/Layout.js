import React from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";
import ProductForm from "./ProductForm.js";
import manageProduct from "./ManageProduct.js";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ProductDetialsPage from "./ProductDetailsPage.js";

function Layout() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <br />
        <Switch>
          <Route path="/appliances" component={ProductDetialsPage}></Route>
          <Route path="/manageProduct/:id" component={manageProduct}></Route>
          <Route path="/manageProduct" component={manageProduct}></Route>
          <Route path="/addProduct" component={ProductForm}></Route>
        </Switch>

        <br />
        <br />
        <br />
        <br />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Layout;
