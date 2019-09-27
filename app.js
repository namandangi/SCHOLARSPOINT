const   express                 = require('express'),
        bodyParser              = require('body-parser'),
        mongoose                = require('mongoose'),
        methodOverride          = require('method-override'),
        flash                   = require('flash'),
        routes                  = require("express-session"),
        User                    = require('./models/user'),
        passport                = require('passport'),
        LocalStrategy           = require('passport-local'),
        app                     = express();

    

      //  mongoose.connect('mongodb://localhost:27017/sp', {useNewUrlParser: true} );
        app.use(bodyParser.urlencoded({extended: true}));
        app.set("view engine", "ejs");
        app.use(express.static(__dirname + "/public"));
        app.use(methodOverride("_method"));
        //app.use(flash());

          var  indexRoutes         = require('./routes/index');
          var scholarshipRoutes   = require('./routes/scholarships');

          app.use('/',indexRoutes);
          app.use(scholarshipRoutes);

        // PASSPORT CONFIGURATION
            app.use(require('express-session')({
            secret: 'El Psy Congroo',
            resave: false,
            saveUninitialized: false
        }));

        app.use(passport.initialize());
        app.use(passport.session());
        //passport.use(new LocalStrategy(User.authenticate()));
        passport.serializeUser(User.serializeUser());
        passport.deserializeUser(User.deserializeUser());

        app.use(function(req, res, next){
        res.locals.currentUser = req.user;
        // res.locals.error = req.flash("error");
        // res.locals.success = req.flash("success");
        next();
        });


        // app.get('*',(req,res)=>{
        //     res.redirect('/');
        // });

        app.listen(process.env.PORT||3000,process.env.IP,()=>{
            console.log('Listening on Port 3000');
        });