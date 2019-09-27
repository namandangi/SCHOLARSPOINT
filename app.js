const   express          = require('express'),
        bodyParser       = require('body-parser'),
        app              = express();


        app.use(bodyParser.urlencoded({extended: true}));
        app.set("view engine", "ejs");


        app.get('/',(req,res)=>{
            res.render('home');
        });

        app.get('/s',(req,res)=>{
            res.render('scholarships');
        });

        app.get('*',(req,res)=>{
            res.redirect('/');
        });

        app.listen(process.env.PORT||3000,process.env.IP,()=>{
            console.log('Listening on Port 3000');
        });