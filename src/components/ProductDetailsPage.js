import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { getProduct, getProductWithFilter } from "../api/productApi";
import * as productApi from "../api/productApi";
import SearchFilter from "./SearchFilter";
import { Link } from "react-router-dom";
import { Button, Collapse } from "react-bootstrap";

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
  const [open, setOpen] = useState(false);

  return (
    <div className="container fixed">
      <div className="header">
        <strong> Our Home Appliances </strong>
      </div>

      <div className="search-bar ">
        <p>
          <Button
            className=""
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Search Filter
          </Button>{" "}
          <Link to="/manageProduct" className="btn btn-primary">
            <span className=""> Add new Product </span>
          </Link>
        </p>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <SearchFilter
              searchFilter={searchFilter}
              onChange={onChange}
              onFilterSubmit={onFilterSubmit}
            />
          </div>
        </Collapse>
      </div>
      <div className="dataTables_wrapper dt-bootstrap">
        <div>
          <ProductList product={product} deleteCourseByid={deleteCourseByid} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetialsPage;
