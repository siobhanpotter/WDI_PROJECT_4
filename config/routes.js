const router = require('express').Router();
const auth  = require('../controllers/auth');
const users  = require('../controllers/users');
const bands  = require('../controllers/bands');
const requests  = require('../controllers/requests');
const secureRoute = require('../lib/secureRoute');


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
  .post(secureRoute, bands.create);

router.route('/bands/:id')
  .get(bands.show)
  .put(secureRoute, bands.update)
  .delete(secureRoute, bands.delete);
// .put(bands.join);//?


//REQUEST ROUTES ->

router.route('/requests')
  .get(requests.index)
  .post(secureRoute, requests.create);

router.route('/requests/find')
  .get(secureRoute, requests.find);

router.route('/requests/:id/accept')
  .put(secureRoute, requests.accept);
// router.route('/requests/:id/reject')
//   .put(secureRoute, requests.reject);


// .get(requests.find);
//
// router.route('/requests/:id')
//   .post(requests.accept)
//   .post(requests.reject);


router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
