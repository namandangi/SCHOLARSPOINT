        var   express       = require('express'),
              passport      = require('passport')
              router        = express.Router({mergeParams:true}),
              User          = require('../models/user'),
              UserData      = require('../models/userData');

        router.get('/',(req,res)=>{
            res.render('home');
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
                    username: req.body.username,
                    password : req.body.password,
                    phone : req.body.phone,
                    dob : req.body.dob,
                    gender : req.body.gender
                });                
                console.log(newUser);
                var newUser1 = new User({username: req.body.username});
            UserData.create(newUser, (err, user)=>{
                if(err)
                {
                    console.log(err);
                    return res.redirect("/signup");
                }
                else{
                User.register(newUser1, req.body.password, function(err, user){
                    if(err){
                        console.log(err);
                        return res.redirect("/signup");
                    }
                    passport.authenticate("local")(req, res, function(){
                       res.redirect("/"); 
                    });
                });
            }
            });
        });
        
                //SHOW LOGIN FORM
                router.get('/login',(req,res)=>{
                    res.render('login');
                });
        
                //HANDLE LOGIN LOGIC
                router.post("/login", passport.authenticate("local", 
                 {
                     successRedirect: "/",
                     failureRedirect: "/login"
                    }), function(req, res){
                        console.log(currentUser);
                });

        //HANDLE THE LOGOUT LOGIC
        router.get("/logout", function(req, res){
            req.logout();
            res.redirect("/login");
         });

module.exports = router;