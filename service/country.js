const countryDAO = require('../dao/country');

class CountryService {
    createCountryInfo(countryDto) {
        const { name, population, gdp, area, pm_name } = countryDto;
        return countryDAO.createCountryInfo(name, population, gdp, area, pm_name);
    }

    updateCountry(countryDto, id) {
        const {name, population, gdp, area, pm_name, status } = countryDto;
        return countryDAO.updateCountry(id, name, population, gdp, area, pm_name, status);
    }

    getCountry() {
        return countryDAO.getCountry();
    }

    deleteCountry(countryDto) {
        const {id} = countryDto;
        return countryDAO.deleteCountry(id);
    }
}

module.exports = new CountryService();