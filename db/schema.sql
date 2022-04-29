-- Create database --
DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;
-- Use database --
USE movie_db;
-- Create tables
CREATE TABLE movies(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_name VARCHAR(50)
);

CREATE TABLE reviews(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_id INT,
    reviews TEXT,
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE SET NULL
);
-- Display if tables are set up as desired --
-- DESCRIBE movies;

-- DESCRIBE reviews;