# GraphQL-JS
GraphQL using Apollo Server with Javascript.

**Example:**
* Get Schema
```
curl http://localhost:4000/graphql -H 'Content-Type: application/json' -H 'Accept: application/json' --data '{ "query":" { __schema{ queryType { fields{ name } } } }" }'
```
* Get one Book by ID
```
curl http://localhost:4000/graphql -H 'Content-Type: application/json' -H 'Accept: application/json' --data '{ "query":" { bookById(id: \"book-1\") { author { id } } }" }'
```
* Get all books
```
curl http://localhost:4000/graphql -H 'Content-Type: application/json' -H 'Accept: application/json' --data '{ "query":" { allBooks { id name pageCount author { id firstName  lastName } } }" }'
```

