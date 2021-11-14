const countryService = require('../service/country');

class CountryController {
    async createCountryInfo(req, res) {
        try {
            const id = await countryService.createCountryInfo(req.body);
            res.status(201).json(id);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    async getCountry(req, res) {
        try {
            const users = await countryService.getCountry();
            res.status(200).json(users);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    async updateCountry(req, res) {
        try {
            let id = req.params.id
            const result = await countryService.updateCountry(req.body, id);
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    async deleteCountry(req, res) {
        try {
            let id = req.params.id
            const result = await countryService.deleteCountry(id);
            res.status(204).json(result);
        } catch (err) {
            res.status(400).json(err);
        }
    }
}

module.exports = new CountryController();