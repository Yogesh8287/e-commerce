import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "./common/input";
import "../style/createitem.css";
import itemService from "../services/item";

function Createitem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [number_of_stock, setnumber_of_stock] = useState("");
  const [price, setPrice] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const item = { name, description, number_of_stock, price };
    await itemService.createItem(item);

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
            className="input"
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            className="input"
            label="Description"
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <Input
            className="input"
            label="Number of Stock"
            type="number"
            name="number of stock"
            value={number_of_stock}
            onChange={(e) => {
              setnumber_of_stock(e.target.value);
            }}
          />
          <Input
            className="input"
            label="Price"
            type="number"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <button className="btn" type="submit">
            Add new product
          </button>
        </form>
      </div>
    </>
  );
}

export default Createitem;
