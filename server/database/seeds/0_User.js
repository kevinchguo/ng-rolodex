exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "kevdev",
          name: "Kevin",
          address: "1234 devleage st.",
          email: "kev@devleague.com"
        },
        {
          username: "calvindev",
          name: "Calvin",
          address: "12345 devleage st.",
          email: "calvin@devleague.com"
        },
        {
          username: "bridev",
          name: "Brian",
          address: "123456 devleage st.",
          email: "bridev@devleague.com"
        }
      ]);
    });
};
