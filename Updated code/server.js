const express = require('express');
const sqlite3 = require('sqlite3');
//Front end application has the port 5500. Bckend server runs in the port 3000.
//As the backend server and frontend application run in different ports Cross-Origin Resource Sharing (CORS) issues has to be handled
const cors = require('cors'); // Import the cors package

// Use the cors middleware


const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

const db = new sqlite3.Database('mortality_database.db');

//app.use(express.static('public'));

// Define API endpoints here. All data from the mortality table in SQLite Database is retrieved and stored in the link /api/data
app.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM mortality';
    db.all(query, [], (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
        return;
      }
      //console.log(rows);
      res.json(rows);
    });
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
