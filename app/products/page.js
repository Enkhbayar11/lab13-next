"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getProducts, createProduct } from "../../services/productsClient";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      await createProduct({ title, price, description });
      setTitle("");
      setPrice("");
      setDescription("");
      loadProducts();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main style={{ padding: "30px" }}>
      <h1>Бүтээгдэхүүний жагсаалт</h1>
      <p>Сайт: {process.env.NEXT_PUBLIC_SITE_NAME}</p>

      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input
          placeholder="Бүтээгдэхүүний нэр"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ display: "block", marginBottom: "10px", padding: "8px" }}
        />

        <input
          placeholder="Үнэ"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ display: "block", marginBottom: "10px", padding: "8px" }}
        />

        <input
          placeholder="Тайлбар"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ display: "block", marginBottom: "10px", padding: "8px" }}
        />

        <button type="submit">Нэмэх</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <h2>{product.title}</h2>
          <p>Үнэ: {product.price}₮</p>
          <p>{product.description}</p>
          <Link href={`/products/${product.id}`}>Дэлгэрэнгүй харах</Link>
        </div>
      ))}
    </main>
  );
}