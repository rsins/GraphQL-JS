
var books = [
    {
        id: "book-1",
        name: "Harry Potter and the Philosopher's Stone",
        pageCount: "223",
        authorId: "author-1"
    },
    {
        id: "book-2",
        name: "Moby Dick",
        pageCount: "635",
        authorId: "author-2"
    },
    {
        id: "book-3",
        name: "Interview with the vampire",
        pageCount: "371",
        authorId: "author-3"
    }
];

var authors = [
    {
        id: "author-1",
        firstName: "Joanne",
        lastName: "Rowling"
    },
    {
        id: "author-2",
        firstName: "Herman",
        lastName: "Melville"
    },
    {
        id: "author-3",
        firstName: "Anne",
        lastName: "Rice"
    }
];

// A map of functions which return data for the schema.
export const resolvers = {
  Query: {
    bookById: (parent, args, context, info) => {
        var id = args.id;
        return books.filter(obj => obj.id === id)[0];
    },
    allBooks: (parent, args, context, info) => {
        return books;
    }
  },
  Book: {
      author(parent) {
          return authors.filter(obj => obj.id === parent.authorId)[0];
      }
  }
};