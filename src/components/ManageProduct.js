import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import * as productApi from "../api/productApi";

function ManageCoursePage(props) {
  const [errors, setErrors] = useState({});
  const [action, setAction] = useState("save");

  const [product, setProduct] = useState({
    id: null,
    serialNumber: "",
    brand: "",
    model: "",
    purchaseDate: "",
    status: "",
  });

  useEffect(() => {
    debugger;
    const id = props.match.params.id;
    if (id) {
      productApi.getProductById(id).then((_product) => {
        setProduct(_product);
        const _action = "update";
        setAction(_action);
      });
    }
  }, [props.match.params.id]);

  function isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false; // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0, 10) === dateString;
  }

  function isFormValid(event) {
    const _errors = {};
    if (!event.target.elements["serialNumber"].value)
      _errors.serialNumber = "Serial Number is required";
    if (!event.target.elements["brand"].value)
      _errors.brand = "Brand  is required";
    if (!event.target.elements["model"].value)
      _errors.model = "Model is required";
    if (event.target.elements["purchaseDate"].value) {
      if (!isValidDate(event.target.elements["purchaseDate"].value))
        _errors.purchaseDate = "Brought Date must be in yyyy-mm-dd format.";
    }
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function onChange(event) {
    const updateProduct = {
      ...product,
      [event.target.name]: event.target.value,
    };
    setProduct(updateProduct);
  }

  function onSubmit(event) {
    debugger;
    event.preventDefault();
    if (!isFormValid(event)) {
      return;
    }

    if (product.id) {
      productApi.updateProduct(product).then(() => {
        debugger;
        props.history.push("/appliances");
      });
    } else {
      productApi.saveProduct(product).then(() => {
        props.history.push("/appliances");
      });
    }
  }

  return (
    <>
      <ProductForm
        onchange={onChange}
        product={product}
        onSubmit={onSubmit}
        errors={errors}
        action={action}
      />
    </>
  );
}

export default ManageCoursePage;
