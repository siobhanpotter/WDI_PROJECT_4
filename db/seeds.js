// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// const { db } = require('../config/environment');
// const app = require('express')();
// const environment = app.get('env');
//
// mongoose.connect(db[environment], { useMongoClient: true });
//
// const User = require('../models/User');
// const Band = require('../models/Band');
//
// //release model
// User.collection.drop();
// Band.collection.drop();
//
// //Add Member models here
// User.create([
//   {
//     username: 'ed123',
//     email: 'ed@ed.com',
//     password: 'password',
//     passwordConfirmation: 'password',
//     image: 'asdfasd',
//     about: 'asdfasdf',
//     mainInstrument: 'asdfasdf',
//     location: '51.465614, -0.114973',
//     formatted_address: 'Brixton O2',
//     style: 'Pop'
//   },
//   {
//     email: 'tom@tom.com',
//     username: 'tom123',
//     password: 'password',
//     passwordConfirmation: 'password',
//     image: 'asdfasd',
//     about: 'asdfasdf',
//     mainInstrument: 'asdfasdf',
//     location: '51.465614, -0.114973',
//     formatted_address: 'Brixton O2',
//     style: 'Pop'
//   }
// ])
//   .then(Users => {
//     console.log(`${Users.length} new Users added`);
//     return Band.create([
//       {
//         bandName: 'Alt J',
//         image:
//           'http://ksassets.timeincuk.net/wp/uploads/sites/55/2016/07/alt-J-Live-At-Red-Rocks-01-1.jpg',
//         about: 'sdfsdf',
//         style: 'alsdkfsd',
//         members: ['Dan', 'Sam', 'Jenny'],
//         location: '51.543370, -0.151815',
//         formatted_address: 'The Roundhouse',
//         memberRequired: 'a;sldkjfadslkfa',
//         createdBy: Users[0]
//       },
//       {
//         bandName: 'Alt J',
//         image:
//           'http://ksassets.timeincuk.net/wp/uploads/sites/55/2016/07/alt-J-Live-At-Red-Rocks-01-1.jpg',
//         about: 'sdfsdf',
//         style: 'alsdkfsd',
//         members: ['Dan', 'Sam', 'Jenny'],
//         location: '51.543370, -0.151815',
//         formatted_address: 'The Roundhouse',
//         memberRequired: 'a;sldkjfadslkfa',
//         createdBy: Users[0]
//       },
//       {
//         bandName: 'Alt J',
//         image:
//           'http://ksassets.timeincuk.net/wp/uploads/sites/55/2016/07/alt-J-Live-At-Red-Rocks-01-1.jpg',
//         about: 'sdfsdf',
//         style: 'alsdkfsd',
//         members: ['Dan', 'Sam', 'Jenny'],
//         location: '51.543370, -0.151815',
//         formatted_address: 'The Roundhouse',
//         memberRequired: 'a;sldkjfadslkfa',
//         createdBy: Users[0]
//       },
//       {
//         bandName: 'Alt J',
//         image:
//           'http://ksassets.timeincuk.net/wp/uploads/sites/55/2016/07/alt-J-Live-At-Red-Rocks-01-1.jpg',
//         about: 'sdfsdf',
//         style: 'alsdkfsd',
//         members: ['Dan', 'Sam', 'Jenny'],
//         location: '51.543370, -0.151815',
//         formatted_address: 'The Roundhouse',
//         memberRequired: 'a;sldkjfadslkfa',
//         createdBy: Users[0]
//       },
//       {
//         bandName: 'Alt J',
//         image:
//           'http://ksassets.timeincuk.net/wp/uploads/sites/55/2016/07/alt-J-Live-At-Red-Rocks-01-1.jpg',
//         about: 'sdfsdf',
//         style: 'alsdkfsd',
//         members: ['Dan', 'Sam', 'Jenny'],
//         location: '51.543370, -0.151815',
//         formatted_address: 'The Roundhouse',
//         memberRequired: 'a;sldkjfadslkfa',
//         createdBy: Users[0]
//       },
//       {
//         bandName: 'Alt J',
//         image:
//           'http://ksassets.timeincuk.net/wp/uploads/sites/55/2016/07/alt-J-Live-At-Red-Rocks-01-1.jpg',
//         about: 'sdfsdf',
//         style: 'alsdkfsd',
//         members: ['Dan', 'Sam', 'Jenny'],
//         location: '51.543370, -0.151815',
//         formatted_address: 'The Roundhouse',
//         memberRequired: 'a;sldkjfadslkfa',
//         createdBy: Users[0]
//       }
//     ]);
//   })
//   .then(bands => console.log(`${bands.length} Cool bands near you!`))
//   .catch(err => console.log(err))
//   .finally(() => mongoose.connection.close());
