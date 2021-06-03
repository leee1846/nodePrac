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
  if (!singleProduct) {
    return res.status(404).send("product does not exist");
  }
  res.json(singleProduct);
});

app.get("api/products/:productId/reviews/:reviewId", (req, res) => {
  const { productId, reviewId } = req.params;
});

app.get(`/api/v1/query`, (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ sucess: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
