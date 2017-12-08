const router = require('express').Router();
const auth  = require('../controllers/auth');
const users  = require('../controllers/users');
const bands  = require('../controllers/bands');
// const requests  = require('../controllers/requests');
// const secureRoute = require('../lib/secureRoute');


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


router.route('/bands')
  .get(bands.index)
  .post(bands.create);

router.route('/bands/:id')
  .get(bands.show)
  .put(bands.update)
  .delete(bands.delete);
// .put(bands.join);//?


//REQUEST ROUTES ->

// router.route('/requests')
//   .post(requests.create)
//   .get(requests.find);
//
// router.route('/requests/:id')
//   .post(requests.accept)
//   .post(requests.reject);





router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
