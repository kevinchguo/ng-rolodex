exports.up = function(knex) {
  return knex.schema.createTable("contacts", table => {
    table.increments();
    table.string("name").notNullable();
    table.string("address");
    table.string("mobile");
    table.string("work");
    table.string("email");
    table.string("facebook");
    table.string("instagram");
    table.string("steam");
    table.string("battlenet");
    table.string("discord");
    table.string("github");
    table
      .integer("created_by")
      .references("id")
      .inTable("users");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {};
