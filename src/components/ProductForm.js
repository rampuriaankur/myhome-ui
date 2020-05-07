import React from "react";
import { Link } from "react-router-dom";
import "moment/locale/it.js";
function ProductForm(props) {
  return (
    <div>
      <section className="section auth">
        <div className="container">
          <form onSubmit={props.onSubmit}>
            <center>
              <h1>Add/Modify Product Details</h1>
            </center>
            <p className="control has-icons-left" />

            <div className="row">
              <div className="col-sm-3">
                <label htmlFor="serialNumber" className="mr-2">
                  Serial Number
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  id="serialNumber"
                  name="serialNumber"
                  label="Enter serail Number"
                  placeholder="Enter serail Number"
                  className="form-control"
                  onChange={props.onchange}
                  value={props.product.serialNumber}
                />
              </div>

              <div className="col-sm-4">
                {props.errors.serialNumber && (
                  <div className="alert alert-danger">
                    {props.errors.serialNumber}
                  </div>
                )}
              </div>
            </div>

            <p className="control has-icons-left" />
            <div className="row">
              <div className="col-sm-3">
                <label htmlFor="brand" className="mr-2">
                  Brand Name
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  id="brand"
                  name="brand"
                  label="brand"
                  placeholder="Enter Brand Name"
                  value={props.product.brand}
                  className="form-control"
                  onChange={props.onchange}
                />
              </div>
              <div className="col-sm-3">
                {props.errors.brand && (
                  <div className="alert alert-danger">{props.errors.brand}</div>
                )}
              </div>
            </div>

            <p className="control has-icons-left" />

            <div className="row">
              <div className="col-sm-3">
                <label htmlFor="model" className="mr-2">
                  Model Name
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  id="model"
                  name="model"
                  label="model"
                  placeholder="Model Number"
                  value={props.product.model}
                  className="form-control"
                  onChange={props.onchange}
                />
              </div>
              <div className="col-sm-3">
                {props.errors.model && (
                  <div className="alert alert-danger">{props.errors.model}</div>
                )}
              </div>
            </div>

            <p className="control has-icons-left" />

            <div className="row">
              <div className="col-sm-3">
                <label htmlFor="status" className="mr-2">
                  Product Status
                </label>
              </div>

              <div className="col-sm-5">
                <input
                  id="status"
                  name="status"
                  label="status"
                  placeholder="Status"
                  value={props.product.status}
                  className="form-control"
                  onChange={props.onchange}
                />
              </div>
              <div className="col-sm-3">
                {props.errors.status && (
                  <div className="alert alert-danger">
                    {props.errors.status}
                  </div>
                )}
              </div>
            </div>

            <p className="control has-icons-left" />
            <div className="row">
              <div className="col-sm-3">
                <label htmlFor="purchaseDate" className="mr-2">
                  Brought Date
                </label>
              </div>
              <div className="col-sm-5">
                <div>
                  <input
                    id="purchaseDate"
                    name="purchaseDate"
                    placeholder="yyyy-mm-yy"
                    className="form-control"
                    onChange={props.onchange}
                    value={props.product.purchaseDate}
                  />
                </div>
              </div>

              <div className="col-sm-3">
                {props.errors.purchaseDate && (
                  <div className="alert alert-danger">
                    {props.errors.purchaseDate}
                  </div>
                )}
              </div>
            </div>
            <p className="control has-icons-left" />
            <p className="control has-icons-left" />

            <div className="row">
              <div className="col-sm-3">
                <input
                  type="submit"
                  value={props.action}
                  className="btn btn-primary"
                />{" "}
                <Link className="btn btn-secondary " to={"/appliances"}>
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
export default ProductForm;
