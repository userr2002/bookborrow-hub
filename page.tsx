export default function Home() {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      type: "Buy Forever",
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      type: "Borrow",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      type: "Buy Forever",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      type: "Borrow",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-3xl font-bold text-blue-700">
          BookBorrow Hub
        </h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Explore
        </button>
      </nav>

      {/* Hero */}
      <section className="text-center py-10 px-6">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          Borrow Today. Own Forever.
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A modern online library and bookstore where readers can borrow books
          temporarily or purchase them forever.
        </p>
      </section>

      {/* Books */}
      <section className="px-10 pb-14">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Popular Books
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="text-5xl mb-4">📚</div>

              <h4 className="text-xl font-bold text-gray-800">
                {book.title}
              </h4>

              <p className="text-gray-500">{book.author}</p>

              <span className="inline-block mt-3 mb-4 bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                {book.type}
              </span>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                  Borrow
                </button>

                <button className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t">
        © 2026 BookBorrow Hub • Online Library & Bookstore
      </footer>
    </main>
  );
}