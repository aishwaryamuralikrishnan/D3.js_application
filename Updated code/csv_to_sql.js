//A Javascript file to import the data from the CSV file to the SQLite Database
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const csvParser = require('csv-parser');

// Connect to the SQLite database
const db = new sqlite3.Database('mortality_database.db');

// Read and parse the CSV file
fs.createReadStream('mortality.csv') //CSV file to be read
  .pipe(csvParser())
  .on('data', row => {
    // Insert each row into the SQLite database
    const keys = Object.keys(row);
    const values = keys.map(key => row[key]);
    
    const placeholders = keys.map(() => '?').join(', ');
    // A new empty table "Mortality" with Rows identical to the CSV file has been created already using SQLite command line
    const insertQuery = `INSERT INTO mortality (${keys.join(', ')}) VALUES (${placeholders})`; // Inserting values from the CSV file to the table in SQLite DB
    
    db.run(insertQuery, values, err => {
      if (err) {
        console.error('Error inserting data:', err);
      }
    });
    
    
  })
  .on('end', () => {
    console.log('CSV file import complete');
    db.close();
  });
