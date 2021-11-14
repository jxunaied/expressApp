const db = require('../database/db_connection');

class CountryDAO {
    async createCountryInfo(name, population, gdp, area, pm_name) {
            const [id] = await db('countries')
                .insert({
                    name: name,
                    population: population,
                    gdp: gdp,
                    area: area,
                    pm_name: pm_name
                }).then( ([id]) => id);
        return id;
    }

    async getCountry() {
        const [users] = await db.select('*').from('countries').returning('*')
        return users;
    }

    async updateCountry(id,name, population, gdp, area, pm_name, status) {
        const [idx] = await db('countries')
            .where('id', '=', id)
            .update({
                name: name,
                population: population,
                gdp: gdp,
                area: area,
                pm_name: pm_name,
                status: status
            });
        return idx;
    }

    async deleteCountry(id) {
        const [idx] = await db('countries')
            .where('id', '=', id)
            .del();
        return idx;
    }
}

module.exports = new CountryDAO();