const Pool = require('pg').Pool
const bodyparser = require('body-parser')
app = require('express')
const pool = new Pool({
  user: 'doxxer',
  host: '127.000.000.1',
  database: 'doxULite',
  password : 'doxxing',
  port: 5432,
})
const getUsers = (request, response) => {
    pool.query('SELECT * FROM theDoxxed WHERE id = (SELECT MAX (id) FROM theDoxxed)',
     (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows);
    })
  }
  const getUserById = (request, response) => {
    console.log(request.body);
    const { id } = request.body;
    pool.query('SELECT * FROM theDoxxed WHERE id = $1' , [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const createUser = (request, response) => {
    console.log(request.body);
    const { id, img, info, age, name, address, addInfo,felony1, felony2, felony3, felony4, felony5, misdemeanor1, misdemeanor2, misdemeanor3, misdemeanor4, misdemeanor5  } = request.body;
    pool.query('SELECT * FROM theDoxxed WHERE id = $1' , [id], (error, results) => {
      if (error) {
        throw error
      }
    })
    pool.query('INSERT INTO theDoxxed (id, img, info, age, name, address, addinfo, felony1, felony2, felony3, felony4, felony5, misdemeanor1, misdemeanor2, misdemeanor3, misdemeanor4, misdemeanor5) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)', [id, img, info, age, name, address, addInfo, felony1, felony2, felony3, felony4, felony5, misdemeanor1, misdemeanor2, misdemeanor3, misdemeanor4, misdemeanor5] ,(error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows}`)
    })
}
  const updateUser = (request, response) => {
    const { img, info, age, name, address, addInfo, felony1, felony2, felony3, felony4, felony5, misdemeanor1, misdemeanor2, misdemeanor3, misdemeanor4, misdemeanor5, id } = request.body
  
    pool.query(
      'UPDATE theDoxxed SET img = $2 , info = $3, age = $4, name = $5, address = $6, addInfo =$7, felony1 = $8, felony2 = $9, felony3 = $10,felony4 = $11,felony5 = $12, misdemeanor1 = $13, misdemeanor2 = $14, misdemeanor3 = $15,  misdemeanor4 = $16, misdemeanor5 = $17 WHERE id = $1',
      [id ,img, info, age, name, address, addInfo,felony1, felony2, felony3, felony4, felony5, misdemeanor1, misdemeanor2, misdemeanor3, misdemeanor4, misdemeanor5],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }
  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }