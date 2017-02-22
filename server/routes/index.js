const express = require('express');
const router = express.Router();
const auth = require('../auth')();
const { sendJSONResponse } = require('../controllers/util');
const { createAccount, login, getAccount,
  getAccountById, getAllAccounts, editAccount, deleteAccount } = require('../controllers/account');
const { home, feed, articles } = require('../controllers/feed');

router.get('/', home);

router.get('/testAuth', auth.authenticate(), (req, res) => {
  sendJSONResponse(200, { yep: 'yep' })(req, res);
});

/** account routes **/
router.post('/register', createAccount);
router.post('/login', auth.checkPassword(), login);
router.get('/account', auth.authenticate(), getAllAccounts);
router.get('/account/getOne', auth.authenticate(), getAccount);
router.get('/account/:accountId', auth.authenticate(), getAccountById);
router.patch('/account/:accountId', auth.authenticate(), editAccount);
router.delete('/account/:accountId', auth.authenticate(), deleteAccount);

/** news feed routes **/
router.get('/feed', feed);
router.get('/articles', articles);


module.exports = router;
