var  express     = require('express');
var router  = express.Router();


    router.get('/s',(req,res)=>{
        //res.send('hi');
        res.render('scholarships');

    });

module.exports = router;