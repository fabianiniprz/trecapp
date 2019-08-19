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
})


//Signup    
app.post('/signup/user',(req,res)=>{
    const {name, email, password, confirmpassword} = req.body;
    console.log(name, email, password, confirmpassword);
    res.json({
        message: 'Registro de sesión correcto'
    });
});

//Signin
app.post('/signin/user',(req,res)=>{
    const {email, password} = req.body;
    console.log(email, password);
    res.json({
        message: 'Inicio de sesión correcto'
    });
});


//Start
app.listen(app.get('port'), () => {
    console.log("Stating server " + app.get('port'));
})