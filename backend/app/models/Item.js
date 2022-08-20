const mongoose = require("mongoose");
const Joi = require("joi");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  number_of_stock: {
    type: Number,
    required: true,
  },
  price: Number,
});

function validateItem(item) {
  const schema = Joi.object({
    name: Joi.string().min(4).trim(true).required(),
    description: Joi.string().required(),
    number_of_stock: Joi.number().required(),
    price: Joi.number().required(),
  });
  return schema.validate(item);
}

const Item = mongoose.model("ecommerce", itemSchema);

exports.Item = Item;
exports.validate = validateItem;
