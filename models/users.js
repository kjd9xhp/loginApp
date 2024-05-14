const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
    }
})

// UsersSchema.set('toJSON', {virtuals: true})

// const User = mongoose.model('users', UsersSchema)

// exports = module.exports = User

module.exports = mongoose.model("users", UsersSchema)