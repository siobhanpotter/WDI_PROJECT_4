const Request = require('../models/request');

function requestsIndex(req, res, next) {
  Request
    .find()
    .populate('sender reciever band')
    .then(requests => res.status(200).json(requests))
    .catch(next);
}

function requestsFind(req, res, next) {
  Request
    .find({ reciever: req.currentUser._id })
    .populate('sender reciever band')
    .then(requests => {
      if(!requests) res.notFound();

      res.status(200).json(requests);
    })
    .catch(next);
}

function requestsCreate(req, res, next) {
  req.body.sender = req.currentUser._id;

  Request
    .create(req.body)
    .then(request => res.status(201).json(request))
    .catch(next);
}

// REQUESTS ACCEPT
// find request by id in url
// change requests status to 'accepted'
// find band by request.band
// push sender from request into band.members
// save band
// return request with accepted status as res


function requestsAccept(req, res, next) {
  Request
    .findById(req.params.id)
    .exec()
    .then(request => {
      request.status = 'accepted';
      return request.save();
    })
    .then(request => res.json(request))
    .catch(next);
}

//REJECT FUNCTION
// find request by id in url
// change requests status to 'rejected'
// save request
// return request with rejected status as res


// function requestsReject(req, res, next) {
//   Request
//     .findByIdAndUpdate(req.params.id, { status: 'rejected' }, { new: true })
//   req.save()
//     .then(request => res.status(200).json(request))
//
// }


// function requestAccept(req, res, next) {
//
//   Request
//
//     .catch(next);
// }
//
// function requestReject(req, res, next) {
//
//   Request
//
//     .catch(next);
// }

// find based on the current user

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



module.exports = {
  index: requestsIndex,
  create: requestsCreate,
  find: requestsFind,
  accept: requestsAccept
  // reject: requestsReject
};
