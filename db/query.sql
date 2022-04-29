-- Join tables --
SELECT movies.movie_name,reviews.reviews FROM movies JOIN reviews WHERE reviews.movie_id = movies.id;