import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Input from "./common/input";
import "../style/createitem.css";
import itemServie from "../services/item";

function Updateitem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [number_of_stock, setnumber_of_stock] = useState("");
  const [price, setPrice] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const start = async () => {
      const item = await itemServie.getItemById(params.id);
      setName(item.name);
      setDescription(item.description);
      setnumber_of_stock(item.number_of_stock);
      setPrice(item.price);
    };
    start();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, description, number_of_stock, price };
    await itemServie.updateItem(params.id, data);

    if (!(name || description || number_of_stock || price)) {
      alert("enter the details");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div className="main-div">
        <form className="form" onSubmit={handleSubmit}>
          <Input
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            label="Description"
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <Input
            label="Number of Stock"
            type="number"
            name="number of stock"
            value={number_of_stock}
            onChange={(e) => {
              setnumber_of_stock(e.target.value);
            }}
          />
          <Input
            label="Price"
            type="number"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <button className="btn" type="submit">
            Update product
          </button>
        </form>
      </div>
    </>
  );
}

export default Updateitem;

// const result = axios({
//   method: "PUT",
//   url: `http://localhost:5000/items/${params.id}`,
//   data: { name, description, number_of_stock, price }
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
