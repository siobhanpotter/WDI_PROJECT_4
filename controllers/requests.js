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
    .find({ reciever: req.currentUser._id, sender: { $ne: req.currentUser._id }, status: 'pending' })
    .populate('sender reciever band')
    .then(requests => {
      if(!requests) res.notFound();
      // const requestsWhereImNotSender = requests.filter(request => {
      //   return `${request.sender._id}` !== `${request.reciever._id}`;
      // });

      // console.log(requestsWhereImNotSender);
      res.status(200).json(requests);
    })
    .catch(next);
}

function requestsCreate(req, res, next) {
  req.body.sender = req.currentUser._id;
  console.log(req.body);

  //FIRST CHECK --> make sure that the req.body.sender and req.body.reciever are not the same
  

  //find all of the requests to that specific band
  //.then(requests =>
  //  const filteredRequests = requests.filter(request => request.sender.id === req.currentUser && request.band === req.body.band ); <-- if this array is empy, then you can create the request, otherwise send status of 500
  //  return Request.create(req.body)
  // )
  //.then(request => re)
  //.catch(next);
  Request
    .create(req.body)
    .then(request => res.status(201).json(request))
    .catch(next);
}

function requestsRespond(req, res, next) {
  Request
    .findById(req.params.id)
    .exec()
    .then(request => {
      request.status = req.body.status;
      return request.save();
    })
    .then(request => res.json(request))
    .catch(next);
}


module.exports = {
  index: requestsIndex,
  create: requestsCreate,
  find: requestsFind,
  respond: requestsRespond
};
