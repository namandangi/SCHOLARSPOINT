        var   express       = require('express'),
              router        = express.Router(),
              User          = require('../models/user');

        router.get('/',(req,res)=>{
            res.render('home');
        });
        //SHOW LOGIN FORM
        router.get('/login',(re,res)=>{
            res.render('login');
        });

        //HANDLE LOGIN LOGIC
        router.post("/login", passport.authenticate("local", 
         {
             successRedirect: "/",
             failureRedirect: "/login"
            }), function(req, res){
        });

        //SHOW THE SIGNUP FORM
        router.get('/signup',(req,res)=>{
            res.render('signup');
        });

        //HANDLE THE SIGNUP LOGIC
        router.post("/signup", function(req, res){
            var newUser = new User(
                {
                    firstName : req.body.firstName,
                    lastName : req.body.lastName,
                    email: req.body.email,
                    phone : req.body.phone,
                    dob : req.body.dob,
                    gender : req.body.gender

                });
            User.register(newUser, req.body.password, function(err, user){
                if(err){
                    console.log(err);
                    return res.render("login");
                }
                passport.authenticate("local")(req, res, function(){
                   res.redirect("/"); 
                });
            });
        });

        //HANDLE THE LOGOUT LOGIC
        router.get("/logout", function(req, res){
            req.logout();
            res.redirect("/campgrounds");
         });

module.exports = router;