import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import itemService from "../services/item";

function Item() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const start = async () => {
      const items = await itemService.getItems();
      setItems(items);
    };
    start();
  }, []);

  async function deleteProduct(id) {
    await itemService.deleteItem(id);
    const newItems = items.filter((item) => item._id !== id);
    setItems(newItems);
  }

  return (
    <>
      <table className="table table-bordered  table-striped">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Description</th>
            <th>Number of stock</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.number_of_stock}</td>
              <td>{item.price}</td>
              <td className="text-center">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteProduct(item._id)}
                >
                  Delete
                </button>
              </td>
              <td className="text-center">
                <Link
                  className="btn btn-success btn-sm"
                  to={"/update/" + item._id}
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Item;
