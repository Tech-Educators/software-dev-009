# Relational Databases

## Create the tables

```sql
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT,
  author TEXT,
  year INT
);

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE genre_juntion (
  book_id INT REFERENCES books(id),
  genre_id INT REFERENCES genres(id)
);
```

## Add our data

```sql
INSERT INTO books (title, author, year) VALUES
('The Hobbit', 'JRR Tolkien', 1937),
('Tiny Habits' , 'BJ Fogg' , 2019),
('The Lord of the Rings', 'JRR Tolkien', 1947),
('The Silmarillion', 'JRR Tolkien', 1977),
('Misery', 'Stephen King', 1987),
('The Lion, the Witch and the Wardrobe', 'C.S.Lewis' ,1950),
('Steal Like An Artist', 'Austin Kleon', 2012),
('1984', 'George Orwell', 1949);

INSERT INTO genres (name) VALUES
('chilren'),
('fantasy'),
('dystopian'),
('thriller'),
('horror'),
('fiction'),
('non-fiction'),
('art'),
('self help');
```

## Add our genres

Now that we know the IDs of our books and genres, we can add our genres to our junction table, so that each book has genres.

```sql
INSERT INTO genre_juntion (book_id, genre_id) VALUES
(1, 1), -- the hobbit and childrens book_id
(1, 2); -- hobbit and fantasy
(2, 7),
(2, 9),
(3, 2),
(4, 2),
(5, 4),
(5, 5),
(6, 1),
(7, 4),
(7, 5),
(8, 3),
(8, 9);
```

## Selecting our data

Now we can do funky things like selecting all the books that have a genre and see them:

```sql
SELECT
  books.title,
  books.author,
  books.year,
  genres.name AS genre
FROM books
JOIN genre_juntion ON books.id = genre_juntion.book_id
JOIN genres ON genre_juntion.genre_id = genres.id
```

BUT what if we want to get ALL the books regardless of whether or not they have a genre?!
Fear not, just change the `JOIN` to `LEFT JOIN` so it will get ALL the results from the tables on the _left_ of the join, and either get the result from the right table, or just return `null`.
