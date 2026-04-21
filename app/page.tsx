"use client";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<any[]>([]);

  const searchBooks = async () => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_KEY}`
    );

    const data = await res.json();
    setBooks(data.items || []);
  };

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-6">
        BookBorrow Hub
      </h1>

      <p className="text-center text-gray-600 mb-8">
        Search and discover books instantly
      </p>

      <div className="flex gap-3 mb-10">
        <input
          type="text"
          placeholder="Search books..."
          className="border p-3 rounded w-full"
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          onClick={searchBooks}
          className="bg-blue-600 text-white px-6 rounded"
        >
          Search
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {books.map((book, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-bold">
              {book.volumeInfo.title}
            </h2>

            <p className="text-gray-600">
              {book.volumeInfo.authors?.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
