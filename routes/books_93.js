var express = require('express');
var router = express.Router();

const db = require('../utils/database');

/* Create */
router.post('/create', async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const author = req.body.author;
  const price = req.body.price;
  //console.log('id, name, author, price', id, name, author, price);

  try {
    const query = {
      text: `INSERT INTO book_93 (id, name, author, price) VALUES ($1, $2, $3, $4)`,
      values: [id, name, author, price]
      }
      await db.query(query);
      res.redirect('/books_93');
  } catch (err){
    console.log(err);
  }
});

/* READ */
router.get('/', async function (req, res) {
  let data;
  try {
    const results = await db.query('SELECT * FROM book_93');
    data = results.rows;
    console.log('data', JSON.stringify(data));
    // res.json(data);
    res.render('books', { data });
  } catch (err) {
    console.log('Errors on getting books!');
    res.render('books_93', { data: '' });
  }
});

router.get('/create', async (req, res) => {
  try {
  res.render('books/add_93')
  } catch (err){
    console.log(err);
  }
});

router.get('/edit/:id', async (req, res) => {
  const id = req.params.id;
  console.log('id', id);
  try {
    const query = {
      text: `SELECT * FROM book_93 WHERE id = $1`,
      values: [id]
    }
    const results = await db.query(query);
    data = results.rows;
    res.render('books/edit_93', {
      id: data[0].id,
      name: data[0].name,
      author: data[0].author,
      price: data[0].price
    });
  } catch (err) {
    console.log(err);
  }
})


/* UPDATE */
router.post('/update', async (req, res) => {
  try {
    const query = {
      text: `UPDATE book_93 SET name = $1, author = $2, price = $3 WHERE id = $4`,
      values: [req.body.name, req.body.author, req.body.price, req.body.id]
    }
    await db.query(query);
    res.redirect('/books_93');
  } catch (err){
    console.log(err);
  }
});

/* DELETE */
router.get('/delete/:id', async (req, res) => {
   try {
    console.log('id', req.params.id);
    const query = {
      text: `DELETE FROM book_93 WHERE id = $1;`,
      values: [req.params.id]
    }
     const results = await db.query(query);
     res.redirect('/books_93');
   } catch (err) {
     console.log(err);
   }
});


module.exports = router;