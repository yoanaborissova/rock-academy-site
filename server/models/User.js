const mongoose = require('mongoose');
const encryption = require('../util/encryption');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: Schema.Types.String,
    unique: true,
    required: true
  },
  hashedPassword: {
    type: Schema.Types.String,
    required: true
  },
  status: {
    type: Schema.Types.String,
    default: 'Guest'
  },
  about: {
    type: Schema.Types.String,
    default: 'No information added.'
  },
  bands: [{
    type: Schema.Types.ObjectId,
    ref: 'Band'
  }],
  instruments: [{
    type: Schema.Types.String
  }],
  profilePicture: {
    type: Schema.Types.String,
    default: 'http://static.digg.com/static/fe/5e3271/images/profiles/no-profile-img_lg.png'
  },
  salt: {
    type: Schema.Types.String,
    required: true
  },
  roles: [{type: Schema.Types.String, required: true}]
});

userSchema.method({
  authenticate: function (password) {
    const currentHashedPass = encryption.generateHashedPassword(this.salt, password);

    return currentHashedPass === this.hashedPassword;
  }
});

const User = mongoose.model('User', userSchema);

User.seedAdminUser = async () => {
  try {
    let users = await User.find();
    if (users.length > 0) return;
    const salt = encryption.generateSalt();
    const hashedPassword = encryption.generateHashedPassword(salt, '123456');
    return User.create({
      username: 'Admin',
      salt,
      about: 'Administrator\'s profile.',
      status: 'Administrator',
      profilePicture: 'https://telegram.org/file/811140509/b45/dQTLEwKZ9gs.22232.gif/4580677d940852f30e',
      hashedPassword,
      roles: ['Admin']
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = User;