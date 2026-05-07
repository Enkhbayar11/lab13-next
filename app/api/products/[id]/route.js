const products = [
  { id: 1, title: "iPhone 15", price: 3200000, description: "Apple smartphone" },
  { id: 2, title: "MacBook Air", price: 4500000, description: "Light laptop" },
  { id: 3, title: "AirPods Pro", price: 850000, description: "Wireless earbuds" },
];

export async function GET(request, { params }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return Response.json(
      { error: { message: "Product not found" } },
      { status: 404 }
    );
  }

  return Response.json(product);
}