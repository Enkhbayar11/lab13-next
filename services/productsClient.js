export async function getProducts() {
  const res = await fetch("/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Products татахад алдаа гарлаа");
  }

  return res.json();
}

export async function createProduct(data) {
  const res = await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.error?.message || "Product нэмэхэд алдаа гарлаа");
  }

  return result;
}