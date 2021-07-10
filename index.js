const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(bodyParser({extended:true}))
app.use(cors())
app.use(express.json())



app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/cart',(req,res)=>{
    res.render('cart.ejs')
})

app.get('/checkout',(req,res)=>{
    res.render('checkout.ejs')
})

app.listen('3005',()=>{
    console.log("Listening on 3005")
})

