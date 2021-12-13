const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');
const {body,validationResult} = require('express-validator');
var cors = require('cors');


const app = express();
const blogController= require('./controller/blog')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

//<----------------models----------------->
const User= require('./models/user');
const plan = require('./models/plan');
const blog = require('./models/blog');

app.use(express.json());
// app.use('/plan',planRoutes);
app.use(express.json());            //For handling jsons
app.use(cors());
// dotenv.config();                    //get config variable


// to set the view engine
app.set('view engine','hbs');

// template engine route
app.get("/",(req,res,next)=>{
    res.render('index1',{
        iconone:'fas fa-search'
    });
}) 
app.get("/blog",(req,res,next)=>{
    res.render('blog.hbs')
})

app.post("/",function(req,res){
    var body = req.body;
    var res_body = {
        first_name: body.first_name,
        password: body.password
    };
    console.log(res_body);
    res.render('welcome', res_body);
});
// app.get("/edit-blog",function(req,res){
//     res.render('edit-blog',{hasBlogs: blogs.lenght>0});
// })

app.post("/product",blogController.addBlog);
app.get("/edit-blogg",blogController.getAllBlog);

//database connection
const sequelize = require('./util/database');
const exp = require('constants');
sequelize.authenticate().then(()=>{
    console.log('database connected....');
}).catch(err=>{
    console.log('Error: '+err);
})


app.get("/",(req,res)=>{
    res.send("hello from express server");
})

sequelize.sync()
    .then(()=>{
        console.log("Sequelize connected!")
        app.listen(3000);

    })
    .catch(err=>{
        console.log(err);
    })