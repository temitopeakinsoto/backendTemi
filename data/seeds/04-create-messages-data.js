let date1 = new Date(2019, 09, 07, 05, 0, 0);

let date2 = new Date(2019, 10, 06, 03, 0, 0);

let date3 = new Date(2019, 11, 07, 04, 0, 0);

exports.seed = function(knex) {
  return knex("messages")
    .truncate()
    .then(function() {
      return knex("messages").insert([
        {
          id: 1,
          user_id: 1,
          student_id: 1,
          text: "grade papers",
          send_to_self: true,
          timestamp: JSON.stringify(date1)
        },
        {
          id: 2,
          user_id: 2,
          student_id: 2,
          text: "send me a copy",
          send_to_self: false,
          timestamp: JSON.stringify(date2)
        },
        {
          id: 3,
          user_id: 3,
          student_id: 3,
          text: "read content",
          send_to_self: true,
          timestamp: JSON.stringify(date3)
        },
        {
          id: 4,
          user_id: 1,
          student_id: 1,
          text: "send me outline",
          send_to_self: true,
          timestamp: JSON.stringify(date2)
        },
        {
          id: 5,
          user_id: 3,
          student_id: 2,
          text: "pick a topic",
          send_to_self: true,
          timestamp: JSON.stringify(date3)
        }
      ]);
    });
};