//Dependencias
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const user = require('./models/Users');
const bcrypt = require('bcrypt-nodejs');

//Middlewares
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname,'../dist/')));

//Database conection
mongoose.connect("mongodb+srv://NeuroApp:neurofilos@cluster0-9sz2p.mongodb.net/test?retryWrites=true&w=majority",
{ 
    useNewUrlParser: true 
})
.then(db => console.log('db conectada'))
.catch(err => console.error(err));


//Routes
app.get('/*/', (req, res) => {
    res.sendFile(path.join(__dirname,'../dist/index.html'));
})

//Signup    
app.post('/signup/user', async(req,res)=>{

    var {name, email, password, confirmpassword} = req.body;
    var userFind = await user.find( {email: email} );
    
    if(name === " " || email === " " || password === " "){
        res.json({
            message: 'Debes llenar todos los campos'
        });
        
    }
    
    else if(password !== confirmpassword){
        res.json({
            message: 'Las contraseñas deben coincidir '
        });
    }

    else if(userFind[0]){
        res.json({
            message: 'Usuario ya registrado'
        });
    }
    else {
        
        
        var newUser = new user(req.body);
        await newUser.save();
        res.json({
            message: 'Registro de sesión correcto'
        });
    }    
});

//Signin
app.post('/signin/user', async(req,res)=>{

    var {email, password} = req.body;
    var userFind = await user.find( {email: email, password: password} );

    if(userFind[0]){
      
        res.json({
            message: 'Inicio de sesión correcto'
            });
    }
    else {
        res.json({
            message: 'Usuario no encontrado'
        });
    }
});

//Change pass

app.post('/user/Change-pass', async (req,res)=>{

    var {email, password, confirmpassword} = req.body;
    var userFind = await user.find0ne( {email: email} );
   
    if(password != confirmpassword){
        res.json({
            message:'Las contraseñas deben coincidir'
        })
    }

    else if (password == userFind.password){
        res.json({
            message:'La contraseña nueva no debe ser igual a la anterior'
        });
    }

    else
    {
        userFind.password = password;
        user.save(userFind);
    }
  
  
});


//Start
app.listen(app.get('port'), () => {
    console.log("Stating server " + app.get('port'));
})