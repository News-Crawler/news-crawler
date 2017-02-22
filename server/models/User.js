const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true },
  password: String,
});

userSchema.plugin(passportLocalMongoose);

mongoose.model('User', userSchema);
