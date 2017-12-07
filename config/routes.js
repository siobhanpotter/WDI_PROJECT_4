const router = require('express').Router();
const auth  = require('../controllers/auth');
const users  = require('../controllers/users');
const bands  = require('../controllers/bands');
// const bandsUsers  = require('../controllers/bandsUsers');
// const secureRoute = require('../lib/secureRoute');

// router.route('/bandsusers')
//   .get(bandsUsers.index);

router.route('/users')
  .get(users.index);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

//do I need this route ?
router.route('/bands')
  .get(bands.index)
  .post(bands.create);

router.route('/bands/:id')
  .get(bands.show)
  .put(bands.update)
  .delete(bands.delete);
  

//something like this for joining a band
// router.route('/bands/:id/join')
//   .put(bands.join);


router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
