import BookCard from './BookCard';

export default function BookList({ books }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}