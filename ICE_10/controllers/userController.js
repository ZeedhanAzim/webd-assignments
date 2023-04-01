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

module.exports = {
    homeView,
    formView,
    formSubmission
};