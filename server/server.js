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

    const {name, email, password, confirmpassword} = req.body;
    const userFind = await user.find( {email: email} );
    
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
        
        
        req.body.password=bcrypt.hash(password, null, null, function(err, hash) {
            // Store hash in your password DB.
        });
        const newUser = new user(req.body);
        await newUser.save();
        res.json({
            message: 'Registro de sesión correcto'
        });
    }    
});



//Signin
app.post('/signin/user', async(req,res)=>{

    const {email, password} = req.body;
    const userFind = await user.find( {email: email, password: password} );

    if(userFind[0]){
        if(bcrypt.compare(password, userFind[0].password, function(err, res) {})){
        res.json({
            message: 'Inicio de sesión correcto'
            });
        }
        else{
            res.json({
                message: 'contraseña incorrecta'
            })
        }
    }
    else {
        res.json({
            message: 'Usuario no encontrado'
        });
    }
});


//Start
app.listen(app.get('port'), () => {
    console.log("Stating server " + app.get('port'));
})