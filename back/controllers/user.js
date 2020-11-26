const User = require('../models/User');

exports.signup = (req, res) => {
//   delete req.body._id;
  const user = new User({ // All the input values are put into an item
      username: req.body.username,
      password: req.body.password
  })
  user.save()
    .then(() => res.status(201).json({message: 'User enregistré !'}))
    .catch(error => res.status(400).json({error}));
};

exports.getAll = (req, res) => {
    User.find()
    .then((userList) => {
        res.status(200).json(userList)
    })
    .catch(error => res.status(400).json({error}));
};

