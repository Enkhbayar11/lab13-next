import { cookies } from "next/headers";
import Link from "next/link";

export default function AdminPage() {
  const auth = cookies().get("auth");

  if (!auth) {
    return (
      <main style={{ padding: "30px" }}>
        <h1>Admin Page</h1>
        <p>Та нэвтрээгүй байна.</p>
        <Link href="/products">Буцах</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "30px" }}>
      <h1>Admin Page</h1>
      <p>Cookie mock auth ажиллаж байна.</p>
    </main>
  );
}