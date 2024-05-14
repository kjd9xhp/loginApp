const userService = require("../service/User.service");

const all = (req, res) => {
  userService.getAll().then((users) => res.json(users));
};

module.exports = {
  all,
};
