const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
////////////////////////////////////////38
require('../model/User')
const User = mongoose.model('User')


const homeView = (req, res) => {
    pageTitle = "Home Page";
    res.render('home', {
        pageTitle: pageTitle
    });
}

const formView = (req, res) => {
    pageTitle = "Registration Page",
        res.render('form', {
            pageTitle: pageTitle
        });

}



const formSubmission = (req, res) => {

    if (password != confirm) {
        console.log('Passwords do not match');
        PasswordError = "Passwords do not match";
        res.render('form', {
            PasswordError: PasswordError
        })
    } else {
        User.findOne({ email: email }).then((user) => {
            if (user) {
                console.log('email found in DB');
                pageTitle = "already registered";
                alreadyRegistered = true;
                regMessage = "you already registered";
                res.render('form-submission', {
                    pageTitle: pageTitle,
                    alreadyRegistered: alreadyRegistered,
                    regMessage: regMessage
                });

            } else {
                const newUser = new User({
                    fullName,
                    email,
                    password
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(() => {
                                console.log('New user created in DB');
                                pageTitle = "registered";
                                alreadyRegistered = false;
                                newRegMessage = 'You are already registered';
                                res.render('form-submission', {
                                    pageTitle: pageTitle,
                                    alreadyRegistered: alreadyRegistered,
                                    newRegMessage: newRegMessage
                                });

                            }).catch(console.log(err));
                    })
                })
            }
        })
    }
}

const getAllUsers = (req, res) => {
    pageTitle = "All Users Page";
    User.Find()
        .lean()
        .then((users) => {
            if (users) {
                res.render('user-list', {
                    users: users,
                    pageTitle: pageTitle
                })
            }
            //handle no users
        })
}

const editUser = (req, res) => {
    let id = req.params.id
    User.findOne({ _id: id }).lean()
        .then((user) => {
            res.render('user-edit', {
                user: user,
                id: id
            });
        })
}
//async important
const updateUser = async (req, res) => {
    const update = { fullName: req.body.fullName, email: req.body.email };
    const id = req.params.id;
    const filter = { _id: id };
    let doc = await User.findOneAndUpdate(filter, update, { new: true });
    res.redirect('./user-list');
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const filter = { _id: id };
    let deletedCount = await User.deleteOne(filter);
    res.redirect('./user-list')
}

module.exports = {
    homeView,
    formView,
    formSubmission,
    getAllUsers,
    editUser,
    updateUser,
    deleteUser
};