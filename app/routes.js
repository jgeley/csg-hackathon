// app/routes.js

module.exports = function (app) {
    
    var isAuthenticated = function (req, res, next) {
            if (req.isAuthenticated())
                return next();
            res.redirect('/login');
        };

    
    app.get('/',   isAuthenticated,function (req, res) {
        res.render('home.html', {
            user: req.user
        });
    });
    
    app.get('/login',   isAuthenticated,function (req, res) {
        res.render('login.html', {
            user: req.user
        });
    });
    
    app.get('/signup',   isAuthenticated,function (req, res) {
        res.render('signup.html', {
            user: req.user
        });
    });
    
    app.get('/logout', function(req,res){
        req.logout();
        res.redirect('/');
    });


};