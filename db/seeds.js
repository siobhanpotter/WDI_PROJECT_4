// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
//
// const { dbURI } = require('../config/environment');
// mongoose.connect(dbURI, { useMongoClient: true });
//
// const Cheese = require('../models/cheese');
// const Country = require('../models/country');
//
// Cheese.collection.drop();
// Country.collection.drop();
//
// Country
//   .create([{
//     username: 'Canada',
//     email: 'Canada',
//     password: 'Canada',
//     image: 'Canada',
//     about: 'Canada',
//     mainInstrument: 'Canada',
//     location: 'Canada',
//     formatted_address: 'Canada',
//     style:
//   }])
//   .then((countries) => {
//     console.log(`${countries.length} countries created!`);
//
//     return Cheese
//       .create([{
//         name: 'Gorgonzola',
//         country: countries[15],
//         tastingNotes: 'Gorgonzola is traditionally a rich creamy cheese, but the blue-green ripples add a sharp spicy flavor that provides an excellent contrast to its richness. The taste ranges from mild to sharp, depending on age.',
//         strength: 3,
//         image: 'http://www.monthlyclubs.com/media/catalog/product/cache/13/image/285x/9df78eab33525d08d6e5fb8d27136e95/g/o/gorgonzola-1.jpg'
//       }]);
//   })
//   .then(cheese => console.log(`${cheese.length} cheeses created!`))
//   .catch(err => console.log(err))
//   .finally(() => mongoose.connection.close());
