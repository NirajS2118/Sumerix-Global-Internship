const mongoose = require("mongoose");

// This defines what a "Product" looks like in our database
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // name is compulsory
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default: "No description provided",
    },
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt fields
  }
);

// Export the model so we can use it in other files
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
