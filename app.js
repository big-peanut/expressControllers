const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const productController=require('./controllers/products')

const app=express()

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.use(adminRoutes)
app.use(shopRoutes)

app.use(productController.pageNotFound)

app.listen(3000) 
