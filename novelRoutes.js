//lmport
const express = require ('express');
const connection = require('../config/db');

const router = express.Router();

//get all the novels
router.get('/', (req, res) => {
  const query = 'SELECT * FROM novels';
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});
//Add new novel
router.post('/', (req, res) => {
  const { title, author, description, publishedYear } = req.body;
  const query = 'INSERT INTO novels (title, author, description, publishedYear) VALUES (?, ?, ?, ?)';
  connection.query(query, [title, author, description, publishedYear], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: results.insertId, title, author, description, publishedYear });
  });
});
  
// Delete a novel
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM novels WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Novel deleted' });
  });
});
  
module.exports = router;