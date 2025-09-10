export default function BookCard({ book }) {
  const coverUrl = book.coverId
    ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
    : 'https://via.placeholder.com/120x180?text=No+Cover';

  // Deduplicate authors
  const authorList = Array.isArray(book.authors)
    ? book.authors
    : typeof book.authors === 'string'
    ? book.authors.split(', ')
    : [];

  const uniqueAuthors = [...new Set(authorList)].join(', ');

  // Format ISBN
  const formatIsbn = (isbn) => {
    if (!isbn || isbn === 'N/A') return 'N/A';
    return isbn.replace(/(\d{3})(\d{1,})/, '$1-$2');
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <img
        src={coverUrl}
        alt={`Cover of ${book.title}`}
        className="w-full h-64 object-cover"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/120x180?text=Image+Not+Found';
        }}
      />
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 mb-1">by {uniqueAuthors}</p>
        <p className="text-xs text-gray-500">
          {book.publishYear !== 'Unknown' && (
            <span>Published: {book.publishYear} | </span>
          )}
          {book.isbn !== 'N/A' && <span>ISBN: {formatIsbn(book.isbn)}</span>}
        </p>
      </div>
    </div>
  );
}