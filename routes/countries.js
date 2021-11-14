var express = require('express');
var router = express.Router();
const db = require('../database/db_connection');
const countryController = require("../controller/country");

/* Countries listing. */
router.get('/', countryController.getCountry);
router.post('/', countryController.createCountryInfo);
router.put('/:id', countryController.updateCountry);
router.delete('/:id', countryController.deleteCountry);

module.exports = router;
