exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("contacts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("contacts").insert([
        {
          name: "Contact 1",
          address: "Address 1",
          work: "Work place 1",
          email: "email1@devleague.com",
          facebook: "fbuser1",
          instagram: "instauser1",
          github: "githubuser1"
        },
        {
          name: "Contact 2",
          address: "Address 2",
          work: "Work place 2",
          email: "email2@devleague.com",
          facebook: "fbuser2",
          instagram: "instauser2",
          github: "githubuser2"
        },
        {
          name: "Contact 3",
          address: "Address 3",
          work: "Work place 3",
          email: "email3@devleague.com",
          facebook: "fbuser3",
          instagram: "instauser3",
          github: "githubuser3"
        }
      ]);
    });
};
