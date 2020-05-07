import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { getProduct, getProductWithFilter } from "../api/productApi";
import * as productApi from "../api/productApi";
import SearchFilter from "./SearchFilter";
function ProductDetialsPage(props) {
  function deleteCourseByid(productId) {
    productApi
      .deleteProductById(productId)
      .then(props.history.push("/appliances"));
  }

  const [product, setProduct] = useState([]);

  const [searchFilter, setSearchFilter] = useState({
    serialNumber: "",
    brand: "",
    model: "",
    status: "",
    purchaseDate: "",
  });

  useEffect(() => {
    getProduct().then((product) => setProduct(product));
  }, [props]);

  function onChange(event) {
    const _searchFilter = {
      ...searchFilter,
      [event.target.name]: event.target.value,
    };
    setSearchFilter(_searchFilter);
  }

  function onFilterSubmit(event) {
    event.preventDefault();
    getProductWithFilter(searchFilter).then((product) => setProduct(product));
  }

  return (
    <>
      <div
        className="jumbotron jumbotron-fluid"
        style={{ backgroundColor: "#5bc0de " }}
      >
        <span className=" text-center h2">
          {" "}
          <strong> Our Home Appliances </strong>
        </span>
      </div>
      <div className="container">
        <div>
          <SearchFilter
            searchFilter={searchFilter}
            onChange={onChange}
            onFilterSubmit={onFilterSubmit}
          />
        </div>

        <div className="dataTables_wrapper dt-bootstrap">
          <div>
            <ProductList
              product={product}
              deleteCourseByid={deleteCourseByid}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetialsPage;
