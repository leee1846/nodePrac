const express = require("express");
const { products } = require("./data.js");

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>home page</h1><a href="/api/products">products</a>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get(`/api/products/:productId`, (req, res) => {
  const { productId } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );
  res.json(singleProduct);
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
