import Link from "next/link";
import { notFound } from "next/navigation";

async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const product = await getProduct(params.id);

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