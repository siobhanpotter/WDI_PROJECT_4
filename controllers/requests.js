// const Request = require('../models/request');
//
//
// function requestCreate(req, res, next) {
//
//   req.body.createdBy = req.user.userId;//?
//   req.body.bandMembers = [req.user.userId];
//
//   Request
//     .create(req.body)
//     .populate('createdBy')//?
//     .then(request => res.status(201).json(request))
//     .catch(next);
// }
//
//
// // function requestAccept(req, res, next) {
// //
// //   Request
// //
// //     .catch(next);
// // }
// //
// // function requestReject(req, res, next) {
// //
// //   Request
// //
// //     .catch(next);
// // }
//
// function requestFindAll(req, res, next) {
//   Request
//     .findById(req.params.id)
//     .exec()
//     .then((request) => {
//       if(!request) return res.notFound();
//       res.json(request);
//     })
//     .catch(next);
// }
//
//
//
// module.exports = {
//   create: requestCreate,
//   find: requestFindAll
//   // delete: requestAccept,
//   // update: requestReject
// };
