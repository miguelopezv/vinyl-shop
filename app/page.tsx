import { Heading, Logo } from "@/app/components/";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
      <div className="max-w-4xl mx-auto text-center">
        <Logo />

        <Heading>Welcome to Vinyl Shop</Heading>

        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Discover your favorite vinyl records from legendary artists. Browse
          our collection of classic albums, explore different genres, and build
          your ultimate music library. High-quality vinyl at great prices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/order"
            className="bg-indigo-600 hover:bg-indigo-800 text-white px-8 py-3 uppercase font-bold cursor-pointer transition-colors duration-200"
          >
            Start Shopping
          </Link>

          <Link
            href="/admin"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 uppercase font-bold cursor-pointer transition-colors duration-200"
          >
            Admin Panel
          </Link>
        </div>
      </div>
    </div>
  );
}
