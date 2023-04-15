const connection = require('../config/database');
const { generatePassword } = require('../lib/passwordUtils');
const User = connection.models.User;

// INDEX
const getIndex = (req, res, next) => {
	res.render('index');
};

// REGISTER GET
const getRegister = (req, res, next) => {
	res.render('register');
};
// REGISTER POST - LEVERAGES GENERATE PASSWORD TO STORE A HASHED EMAIL
const postRegister = (req, res, next) => {
	const saltHash = generatePassword(req.body.password)
	const salt = saltHash.salt
	const hash = salt.hash

	const newUser = new User({
		username: username,
		hash: hash,
		salt: salt,
		isAdmin: true
	})

	newUser.save().then((user) => {
		console.log(`new user: ${user}`);
	})

	res.redirect('./login');
}
// LOGIN GET
const getLogin = (req, res, next) => {
	res.render('login');
};
// LOGIN POST SUCCESS
const loginSuccess = (req, res) => {
	const id = req.session.passport.user
	User.findById({ _id: id })
		.lean()
		.then((user) => {
			if (user) {
				res.render('loginSuccess', {
					loggedIn: req.isAuthenticated(),
					user: user
				});
			} else {
				res.render('loginSuccess', {
					loggedIn: req.isAuthenticated()
				})
			})
		.catch((err) => console.log(`error: ${err}`));
}
// LOGIN POST FAILURE
const loginFailure = (req, res) => {
	res.render('loginFailure', {
		loggedIn: req.isAuthenticated()
	})
}
// LOGOUT GET
const getLogout = (req, res) => {
	req.logout((err) => {
		if (err) {
			return err;
		}
		res.redirect('/protected-route');
	});
};



module.exports = {
	loginFailure,
	loginSuccess,
	getRegister,
	getIndex,
	getLogin,
	getLogout,
	postRegister
};
