//Dependencias
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");

//Middlewares
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname,'../dist/')));

//Routes
app.get('/*/', (req, res) => {
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});

//Signup

app.get('/signup',(req,res)=>{
    res.send('aquí va la vista del registro');
});

app.post('/signup/user',(req,res)=>{
    const {name, email, password, confirmpassword} = req.body;
    res.send('Te has registrado correctamente');
});

//Login.

app.get('/signin',(req,res)=>{
    res.send('aquí va la vista de inicio de sesión');
});

app.post('/signin/user',(req,res)=>{
    const {email, password} = req.body;
    res.send('Inicio de sesión correcto');
});


//Startint
app.listen(app.get('port'), () => {
    console.log("Stating server " + app.get('port'));
});