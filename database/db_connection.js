const knex = require('knex')
const knexFile = require('./knexfile')

//choose either development or staging or production
const db = knex(knexFile.development)
module.exports = db