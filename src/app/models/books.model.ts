import { Document, Model, Schema, model } from "mongoose";

export enum Genre {
  FICTION = "FICTION",
  NON_FICTION = "NON_FICTION",
  SCIENCE = "SCIENCE",
  HISTORY = "HISTORY",
  BIOGRAPHY = "BIOGRAPHY",
  FANTASY = "FANTASY",
}

export interface IBook extends Document {
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}

interface BookModel extends Model<IBook> {
  decrementCopies(bookId: string, quantity: number): Promise<IBook | null>;
}

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, enum: Object.values(Genre), required: true },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Instance method or static method for business logic (copies decrement)
bookSchema.statics.decrementCopies = async function (
  bookId: string,
  quantity: number
) {
  const book = await this.findById(bookId);
  if (!book) throw new Error("Book not found");

  if (book.copies < quantity) throw new Error("Not enough copies available");

  book.copies -= quantity;
  if (book.copies === 0) book.available = false;
  await book.save();
  return book;
};

// Middleware: If copies becomes > 0, set available to true
bookSchema.pre("save", function (next) {
  if (this.isModified("copies") && this.copies > 0) {
    this.available = true;
  }
  next();
});

export const Book = model<IBook, BookModel>("Book", bookSchema);
