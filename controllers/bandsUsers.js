// const Band = require('../models/band');
// const User = require('../models/user');
//
// function bandsUsersIndex(req, res, next) {
//   let bandsUsers = [];
//   Band
//     .find()
//     .exec()
//     .then(bands => {
//       bandsUsers = bandsUsers.concat(bands);
//       return User
//         .find()
//         .exec();
//     })
//     .then(users => {
//       bandsUsers = bandsUsers.concat(users);
//       return res.status(200).json(bandsUsers);
//     })
//     .catch(next);
// }
//
// module.exports = {
//   index: bandsUsersIndex
// };
