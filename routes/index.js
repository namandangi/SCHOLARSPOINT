        var   express     = require('express');
        var router  = express.Router();

        router.get('/',(req,res)=>{
            //res.send('hi');
            res.render('home');
        });
        router.get('/login',(re,res)=>{
            res.send('login page');
        });

        router.get('/signup',(req,res)=>{
            res.send('signup page');
        });

module.exports = router;