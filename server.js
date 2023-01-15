if(process.env.NODE_ENV !== 'production'){
   require('dotenv').config();
}



const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const Subscriber = require("../models/subscriber");
const mongoose = require("mongoose")
const passport = require('passport')
const initializePassport = require('./passport-config')
const flash = require('express-flash')
const session = require('express-session')
initializePassport(passport, email => {
   users.find(user => user.username === username)
})

app.use(express.urlencoded({ extended: false}))
app.use(express.static("public"));
app.use(flash())
app.use(session({
   secret: process.env.SESSION_SECRET,
   resave: false,
   saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/public/www/index.html');
});

function register(){
   console.log({message: "mpike register"})
   app.post('/', async (req,res)=>{
      const subscriber = new Subscriber({
         username: req.body.username,
         password: req.body.password
      })
      try {
         const hashedPassword = await bcrypt.hash(req.body.password, 10)
         subscriber.password = hashedPassword
      } catch (err){
         res.redirect('/')
      }
      
      try{
         const newSubscriber = await subscriber.save()
      } catch (err){
         res.status(400).json({ message: err.message})
      }
      res.redirect('/')
   })

}

function login(){
   app.post('/', passport.authenticate('local', {
      failureFlash: true
   }))
}


const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())


app.listen(3000, ()=> console.log('Server Started'))
