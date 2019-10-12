exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table
      .string("username")
      .unique()
      .notNullable();
    table.string("name");
    table.string("address");
    table.string("email");
    table.string("facebook");
    table.string("instagram");
    table.string("steam");
    table.string("battlenet");
    table.string("discord");
    table.string("github");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
