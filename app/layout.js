
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen">
        <nav className="border-b border-gray-200 p-4 flex gap-6 text-sm font-semibold">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/students" className="hover:text-blue-600">
            Students
          </Link>
        </nav>

        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}