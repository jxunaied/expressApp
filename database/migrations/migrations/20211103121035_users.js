
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
            table.increments('id');
            table.string('name', 255).notNullable();
            table.string('email', 255).notNullable();
            table.string('password', 255).notNullable();
            table.string('phone', 255).notNullable();
            table.enum('user_type', ['admin', 'guest']).defaultTo('guest').notNullable();
            table.tinyint('status').defaultTo(1).notNullable();
            table.timestamps(true, true);
        });
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTable("users");
};
