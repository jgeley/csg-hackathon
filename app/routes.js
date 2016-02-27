// app/routes.js

module.exports = function (app) {
    app.get('/',  function (req, res) {
        res.render('home.html', {
            user: req.user
        });
    });



};