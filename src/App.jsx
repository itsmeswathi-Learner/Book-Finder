import { useState, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Spinner from './components/Spinner';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const handleSearch = useCallback(async (searchTerm) => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);
    setBooks([]);

    try {
      const encodedTitle = encodeURIComponent(searchTerm);
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${encodedTitle}`
      );

      if (!response.ok) throw new Error('Network response was not ok.');

      const data = await response.json();

      if (data.numFound === 0) {
        setError('No books found. Try another search term.');
        return;
      }

      // ✅ FIXED: Safely extract ISBN — check if array and has items
      const formattedBooks = data.docs
        .filter((book) => book.title && book.author_name)
        .map((book) => ({
          key: book.key,
          title: book.title,
          authors: book.author_name || [], // Keep as array for deduplication
          publishYear: book.publish_year?.[0] || 'Unknown',
          coverId: book.cover_i,
          isbn: Array.isArray(book.isbn) && book.isbn.length > 0 ? book.isbn[0] : 'N/A',
        }));

      setBooks(formattedBooks);
    } catch (err) {
      setError('Failed to fetch books. Please check your connection.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 my-8">
          📚 BookFinder for Alex
        </h1>

        <SearchBar onSearch={handleSearch} query={query} setQuery={setQuery} />

        {loading && <Spinner />}
        {error && <p className="text-center text-red-600 mt-6">{error}</p>}

        {!loading && !error && books.length > 0 && (
          <BookList books={books} />
        )}

        {!loading && !error && books.length === 0 && query && (
          <p className="text-center text-gray-600 mt-10">
            Type a book title and hit Enter to start searching!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;