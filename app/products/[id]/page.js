import Link from "next/link";
import { notFound } from "next/navigation";

const products = [
  { id: 1, title: "iPhone 15", price: 3200000, description: "Apple smartphone" },
  { id: 2, title: "MacBook Air", price: 4500000, description: "Light laptop" },
  { id: 3, title: "AirPods Pro", price: 850000, description: "Wireless earbuds" },
];

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <main style={{ padding: "30px" }}>
      <h1>{product.title}</h1>
      <p>Үнэ: {product.price}₮</p>
      <p>{product.description}</p>

      <Link href="/products">Буцах</Link>
    </main>
  );
}