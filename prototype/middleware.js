// to facilitate the opening of different pages on the client side and display certain pages only 
//after having successfully authenicated the user's credentials as stored in our databse.
exports.requireLogin = (req, res, next) => {
    if (req.session && req.session.user) {
        return next();
    }
    else {
        return res.redirect('/login');
    }
}
