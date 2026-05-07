let products = [
  { id: 1, title: "iPhone 15", price: 3200000, description: "Apple smartphone" },
  { id: 2, title: "MacBook Air", price: 4500000, description: "Light laptop" },
  { id: 3, title: "AirPods Pro", price: 850000, description: "Wireless earbuds" },
];

function errorResponse(message, status) {
  return Response.json({ error: { message } }, { status });
}

export async function GET() {
  return Response.json(products);
}

export async function POST(request) {
  const body = await request.json();

  if (!body.title || !body.price) {
    return errorResponse("Title and price required", 400);
  }

  if (isNaN(Number(body.price))) {
    return errorResponse("Price must be number", 400);
  }

  const newProduct = {
    id: Date.now(),
    title: body.title,
    price: Number(body.price),
    description: body.description || "",
  };

  products.push(newProduct);

  return Response.json(newProduct, { status: 201 });
}