const User = require('../models/users')


module.exports = {
    getAll
}

async function getAll(req, res){
    const rs = await User.find().select()
     return rs
}
