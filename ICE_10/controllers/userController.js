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

module.exports = {
    homeView,
    formView

};