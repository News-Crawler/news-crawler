const mongoose = require('mongoose');
const auth = require('../auth')();
const guid = require('guid');
const { sendJSONResponse, notAuthorized } = require('./util');
const User = mongoose.model('User');

const createAccount = (req, res) => {
  const id = guid.raw();
  const userInfo = {
    username: req.body.username,
    id,
  }
  User.register(new User(userInfo), req.body.password, (error, user) => {
    if (error) {
      return sendJSONResponse(400, { message: 'Unable to create user', error })(req, res);
    }
    const token = auth.generateToken({ id });
    return sendJSONResponse(200, { status: 'success', user, token })(req, res);
  });
}

const login = (req, res) => {
  User.findOne({ username: req.body.username }, function(error, user) {
    if (error) { return sendJSONResponse(400, { status: 'failure', error })(req, res); }
    const token = auth.generateToken({ id: user.id });
    return sendJSONResponse(200, { status: 'success', user, token })(req, res);
  });
};

const getAccount = (req, res) => {
  User.findOne({ id: req.user.id }, function(error, user) {
    if (error) { return sendJSONResponse(400, { status: 'failure', error })(req, res); }
    const token = auth.generateToken({ id: user.id });
    return sendJSONResponse(200, { status: 'success', user, token })(req, res);
  });
}

const getAccountById = (req, res) => {
  if (req.params.accountId !== req.user.id && req.user.role < 2) {
    return notAuthorized(req, res);
  }
  return User.findOne({ id: req.params.accountId }, function(error, user) {
    if (error) { return sendJSONResponse(400, { status: 'failure', error })(req, res); }
    const token = auth.generateToken({ id: user.id, role: user.role });
    return sendJSONResponse(200, { status: 'success', user, token })(req, res);
  });
}

const getAllAccounts = (req, res) => {
  if (req.user.role < 2) {
    return notAuthorized(req, res);
  }
  return User.find().select({ username: 1, role: 1, id: 1 }).exec((error, results) => {
    if (error) {
      return sendJSONResponse(400, { error, status: 'failure' })(req, res);
    }
    return sendJSONResponse(200, { users: results })(req, res);
  })
};

const editAccount = (req, res) => {
  if (req.user.id !== req.params.accountId) {
    return notAuthorized(req, res);
  }
  if (req.body.password) {
    User.findOne({ id: req.params.accountId }, (error, user) => {
      if (error) {
        return console.warn('Error finding user', error);
      }
      user.setPassword(req.body.password, (error, success) => {
        if (error) {
          return console.warn('Error changing password', error);
        }
        user.save();
        return console.warn('Password changed', success);
      });
    });
  }
  if (req.user.role === 2 && req.body.role > 2) {
    return notAuthorized(req, res); // manager cannot give admin privileges
  }
  const updatePayload = req.user.role === 1 ? { username: req.body.username } : {
    username: req.body.username,
    role: req.body.role,
  };
  return User.findOneAndUpdate(
    { id: req.params.accountId },
    { $set: updatePayload },
    { new: true },
    (error, updated) => {
    if (error) { return sendJSONResponse(400, { error })(null, res); }
    return sendJSONResponse(200, { user: updated })(null, res);
  });
};

const deleteAccount = (req, res) => {
  if (req.user.role < 3) { // only admins can delete others' accounts
    if (req.user.id !== req.params.accountId) { // users can delete their own accounts
      return notAuthorized(req, res);
    }
  }
  return User.findOneAndRemove({ id: req.params.accountId }, (error, update) => {
    if (error) { return sendJSONResponse(400, { error })(null, res); }
    return sendJSONResponse(200, update)(null, res);
  });
}

module.exports = {
  createAccount,
  login,
  getAccount,
  getAccountById,
  getAllAccounts,
  editAccount,
  deleteAccount,
};
