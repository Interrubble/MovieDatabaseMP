const express = require('express');
const PORT = process.env.PORT || 3001;
const mysql = require('mysql2');
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'movie_db'
    },
    console.log(`Connected to the movie_db database.`)
);

app.get('/api/movies', (req, res) =>
    db.query('SELECT * FROM movies', function (err, results) {
        // console.log(results);
        if (err) {
            res.status(500);
            return;
        }
        res.json(results);
    }
    ))

app.post('/api/add-movie', (req, res) =>
    db.query(`INSERT INTO movies (movie_name) VALUES (?);`, req.body.movie_name, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(result);
    })
);

app.get('/api/update-review', (req, res) =>
    db.query('SELECT movies.movie_name AS move, reviews.reviews FROM reviews LEFT JOIN movies ON reviews.movie_id = movies.id ORDER BY movies.movie_name;', [req.body.reviews, req.params.id], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(result)
    })
);

app.delete('/api/movies/:?', (req, res) =>
    
db.query('DELETE FROM movies WHERE id = ?',req.params.id,(err, rows)=>{
    if (err) {
        console.log(err);
        return;
    }
    res.json({
        message:"Selection deleted",
        data:rows,
    })
})
)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});  