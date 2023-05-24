const express  = require("express");
const path = require("path");
require("./db/conn");
// for database
const User = require("./models/usermessage");

const hbs = require("hbs");
const exp = require("constants");
const app = express();
const port = process.env.PORT || 3000;

// setting the path 
const staticpath = path.join(__dirname,"../public");
// by this we are telling express that we made the templates folder and views 
const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");





//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));


app.use(express.urlencoded({extended:false}))
// for using static website
app.use(express.static(staticpath))
// we are using handlebar
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);

// routing
// app.get(path,callback)
app.get("/", (req, res) => {
    res.render("index");
    });

    
app.post("/contact",async(req,res) => {
    try {
        // req.body se schema me kya kya likha hai vo milega     
        // res.send(req.body);
        // when even we need to create or add using postmethod use req.body
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error);
    }
})

    // server create
    app.listen(port,() => {
        console.log(`Server is running at port no ${port}`);
    })
