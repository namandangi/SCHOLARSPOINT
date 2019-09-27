const   express          = require('express'),
        app              = express();



        app.get('/',(req,res)=>{
            res.send('HEY THERE !');
        });

        app.listen(process.env.PORT||3000,process.env.IP,()=>{
            console.log('Listening on Port 3000');
        });