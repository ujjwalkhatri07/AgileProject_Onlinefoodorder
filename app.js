const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const uploadRouter = require('./routes/uploads');
const foodCat = require('./routes/FoodCategory');
const resturantRouter = require('./routes/Restaurant');
const food = require('./routes/Food');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');
const vieworder=require('./routes/vieworder')
const auth = require('./auth');
const app = express();
const path = require("path");
const PORT=process.env.PORT || 5000;
const cors = require('cors');
const dotenv = require("dotenv").config();


   
  //Connecting with Mongodb server mongo atlas

  mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ujjwal:btcROmtkt3U4eYvj@cluster0.fupik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
  }).then((db)=>{
      console.log("Succesfully connected to mongodb server");
  },(err)=>console.log(err));

  app.use(express.static(__dirname + "/public"));
  app.options('*', cors());
  app.use(cors());
  app.use(express.json());

  app.use('/users',userRouter);
  app.use('/upload',uploadRouter);
  app.use('/foodCat',foodCat);
  app.use('/resturants',resturantRouter);
  app.use('/foods', food);
  app.use(vieworder)

  // app.use(auth.verifyUser);
  app.use('/cart',cartRouter);
  app.use('/order',orderRouter);

//for hosting
  if(process.env.NODE_ENV === 'production'){
    app.use(express.static('food/build'));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "food","build", "index.html"));
    });
  }

  //Listening to Port

  app.listen(PORT, ()=>{
console.log(`App is running at localhost: ${PORT}`);
});