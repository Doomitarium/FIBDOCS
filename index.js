const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3001
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'doxxer',
  host: '127.000.000.1',
  database: 'doxULite',
  password : 'doxxing',
  port: 5432,
})
app.use(bodyparser.json())
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
)
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'Content-type');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  return next();
});

app.get('/users', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.post('/check', (request , response) => {
  console.log(request.body);
    const { id, img, info, age, name, address, addInfo,felony1, felony2, felony3, felony4, felony5, misdemeanor1, misdemeanor2, misdemeanor3, misdemeanor4, misdemeanor5  } = request.body;
    pool.query('SELECT * FROM theDoxxed WHERE id = $1' , [id], (error, results) => {
      if (error) {pool.query('INSERT INTO theDoxxed (id, img, info, age, name, address, addinfo, felony1, felony2, felony3, felony4, felony5, misdemeanor1, misdemeanor2, misdemeanor3, misdemeanor4, misdemeanor5) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)', [id, img, info, age, name, address, addInfo, felony1, felony2, felony3, felony4, felony5, misdemeanor1, misdemeanor2, misdemeanor3, misdemeanor4, misdemeanor5] ,(error, results) => {
      })
      }else if(!error) {
        response.status(201).send(`No Users added`)
        }
        
      })
    })

app.get('/get', db.getUsers)
app.post('/getusers', db.getUserById)
app.post('/', db.createUser)
app.put('/put', db.updateUser)
app.delete('/delete', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})