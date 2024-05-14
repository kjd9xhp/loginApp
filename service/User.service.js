const User = require("../models/users");

module.exports = {
  getAll,
};

async function getAll() {
  const rs = await User.find().select();
  return rs;
}
