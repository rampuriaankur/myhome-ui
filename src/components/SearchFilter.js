import { Link } from "react-router-dom";

import React from "react";

function SearchFilter(props) {
  return (
    <div className="s003">
      <form onSubmit={props.onFilterSubmit}>
        <section className="section center ">
          <div className="row">
            <div className="col-sm-4 input">
              <input
                id="serialNumber"
                name="serialNumber"
                label="Enter serial Number"
                placeholder="Enter serial Number"
                className="form-control"
                onChange={props.onChange}
                value={props.searchFilter.serialNumber}
              />
            </div>
            <div className="col-sm-4 input">
              <input
                id="brand"
                name="brand"
                label="Enter Brand "
                placeholder="Enter Brand "
                className="form-control"
                onChange={props.onChange}
                value={props.searchFilter.brand}
              />
            </div>
            <div className="col-sm-4 input">
              <input
                id="model"
                name="model"
                label="model"
                placeholder="Enter Model"
                value={props.searchFilter.model}
                className="form-control"
                onChange={props.onChange}
              ></input>
            </div>
          </div>
          <p className="control has-icons-left" />
          <p className="control has-icons-left" />
          <div className="row ">
            <div className="col-sm-4 input">
              <input
                id="status"
                name="status"
                label="status"
                placeholder="Status"
                value={props.searchFilter.status}
                className="form-control"
                onChange={props.onChange}
              />
            </div>
            <div className="col-sm-4 input">
              <input
                id="purchaseDate"
                name="purchaseDate"
                placeholder=" Enter BroghtDate yyyy-mm-yy"
                className="form-control"
                onChange={props.onChange}
                value={props.searchFilter.purchaseDate}
              />
            </div>
            <div className="col-sm-2">
              <button className="btn  btn-success">search</button>
            </div>
            <div className="col-sm-2">
              <Link to="/manageProduct" className="btn btn-primary">
                <span className=""> Add new Product </span>
              </Link>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default SearchFilter;
