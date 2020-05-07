import React from "react";
import { Link } from "react-router-dom";
function ProductList(props) {
  function deleteProduct(e) {
    props.deleteCourseByid(e.target.value);
  }

  return (
    <table className="table table-striped table-bordered">
      <thead className="thead-dark">
        <tr>
          <th className="text-center">Serial Number</th>
          <th className="text-center">Brand Name</th>
          <th className="text-center">Model </th>
          <th className="text-center">Date Bought</th>
          <th className="text-center">Status</th>
          <th className="text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.product.map((product) => {
          return (
            <tr key={product.id}>
              <td>
                <Link to={"/manageProduct/" + product.id}>
                  {product.serialNumber}
                </Link>
              </td>
              <td>{product.brand}</td>
              <td>{product.model}</td>
              <td>{product.purchaseDate}</td>
              <td>{product.status}</td>
              <td>
                <button onClick={deleteProduct} value={product.id}>
                  Delete product
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductList;
