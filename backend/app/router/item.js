const express = require("express");
const router = express.Router();
const { Item, validate } = require("../models/Item");

router.get("/", async (req, res) => {
  const item = await Item.find();
  res.send(item);
});

router.get("/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.send(item);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const item = new Item({
    name: req.body.name,
    description: req.body.description,
    number_of_stock: req.body.number_of_stock,
    price: req.body.price,
  });
  await item.save();
  res.send(item);
});

router.put("/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) res.status(404).send("product not found");

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  item.name = req.body.name;
  item.description = req.body.description;
  item.number_of_stock = req.body.number_of_stock;
  item.price = req.body.price;

  await item.save();
  res.send(item);
});

router.delete("/:id", async (req, res) => {
  const item = await Item.deleteOne({ _id: req.params.id });
  res.send(item);
});

module.exports = router;
