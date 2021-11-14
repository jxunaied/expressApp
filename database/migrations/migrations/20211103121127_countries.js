exports.up = function(knex) {
    return knex.schema.createTable('countries', function (table) {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.string('population', 255).notNullable();
        table.string('gdp', 255).notNullable();
        table.string('area', 255).notNullable();
        table.string('pm_name').notNullable();
        table.tinyint('status').defaultTo(1).notNullable();
        table.timestamps(true, true);
    });

};

exports.down = function(knex) {
    return knex.schema
        .dropTable("countries");
};
