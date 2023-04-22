//for home get
const homeView = (req, res) => {
    const pageTitle = "HOME PAGE";
    const homeContent = "welcome to the homepage";
    res.render('home', {
        pageTitle: pageTitle,
        homeContent: homeContent
    })
};

module.exports = {
    homeView
}