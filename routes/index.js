        var   express     = require('express');
        var router  = express.Router();

        router.get('/',(req,res)=>{
            //res.send('hi');
            res.render('home');
        });
        router.get('/login',(re,res)=>{
            res.render('login');
        });

        router.get('/signup',(req,res)=>{
            res.render('signup');
        });

module.exports = router;