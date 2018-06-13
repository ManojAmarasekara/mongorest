// This is the

const express = require('express');
const app = express();
const router = express.Router();

const User = require('../models/User');

// Defined insert data
router.route('/').post(function (req, res) {
    const user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json(
                {
                    'status': 'success',
                    'code': 200,
                    'message': 'user added successfully'
                }
            );
        })
        .catch(err => {
            res.status(400).json(
                {
                    'status': 'fail',
                    'code': 400,
                    'message': "unable to save the user into database",
                    'data': req.body
                }
            );
        });
});

// Defined get data(index or listing) route
router.route('/').get(function (req, res) {
    User.find(function (err, users) {
        if (err) {
            console.log(err);
            res.status(400).json(
                {
                    'status': 'fail',
                    'code': 400,
                    'message': err
                }
            );
        }
        else {
            res.status(200).json(
                {
                    'status': 'success',
                    'code': 200,
                    'message': 'user added successfully',
                    'data': users
                }
            );
        }
    });
});

//  Defined update route
router.route('/:id').put(function (req, res) {
    User.findById(req.params.id, function (err, users) {
        if (!users)
            return next(new Error('Could not load Document'));
        else {
            users.fName = req.body.fName;
            users.lName = req.body.lName;
            users.email = req.body.email;
            users.contactNo = req.body.contactNo;
            users.password = req.body.password;

            users.save().then(users => {
                res.status(200).json(
                    {
                        'status': 'success',
                        'code': 200,
                        'message': 'user updated successfully',
                        'data': [
                            {
                                'id': users.id,
                            }
                        ]
                    }
                );
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

//  Defined view user route
router.route('/:id').get(function (req, res) {
    User.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
            res.status(400).json(
                {
                    'status': 'fail',
                    'code': 400,
                    'message': err
                }
            );
        }
        else {
            res.status(200).json(
                {
                    'status': 'success',
                    'code': 200,
                    'data': user
                }
            );
        }
    });
  });
module.exports = router;