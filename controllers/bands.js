const Band = require('../models/band');


// list of bands on index
function bandsIndex(req, res, next) {
  Band
    .find()
    // .populate('createdBy')
    .exec()
    .then(bands => res.json(bands))
    .catch(next);
}


//create a band
function bandsCreate(req, res, next) {

  // if(req.file) req.body.image = req.file.filename;

  //created by ->
  // req.body.createdBy = req.user.userId;///????????????????????????
  // req.body.bandMembers = [req.user.userId];

  Band
    .create(req.body)
    .then(band => res.status(201).json(band))
    .catch(next);
}

// //
// // //profile page
function bandsShow(req, res, next) {
  Band
    .findById(req.params.id)
    // .populate('bandMembers createdBy')///?????????????????????
    .exec()
    .then((band) => {
      if(!band) return res.notFound();
      res.json(band);
    })
    .catch(next);
}

// // //updating your details, this is where you would add details to ?
function bandsUpdate(req, res, next) {

  // if(req.file) req.body.image = req.file.filename;

  Band
    .findById(req.params.id)
    .exec()
    .then((band) => {
      if(!band) return res.notFound();
      band = Object.assign(band, req.body);
      return band.save();
    })
    .then(band => res.json(band))
    .catch(next);
}


// //end membership
function bandsDelete(req, res, next) {
  Band
    .findById(req.params.id)
    .exec()
    .then((band) => {
      if(!band) return res.notFound();
      return band.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}


///something like this to request to join a band
// function bandsJoin(req, res) {
//   Band.findById(req.params.id)
//     .then(band => {
//       if (band.bandMembers.indexOf(req.user.userId) === -1) {
//         band.bandMembers.push(req.user.userId);
//         band.save();
//         return res.status(200).json(band);
//       } else {
//         return res
//           .status(500)
//           .json({ message: 'User already in this band' });
//       }
//     })
//     .catch(() =>
//       res.status(500).json({ message: 'Something went very wrong.' })
//     );
// }

module.exports = {
  create: bandsCreate,
  index: bandsIndex,
  show: bandsShow,
  update: bandsUpdate,
  delete: bandsDelete
  // join: bandsJoin,????????????????
};
