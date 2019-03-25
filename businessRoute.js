const express = require('express');
const businessRoutes = express.Router();

const Product = require('./productModel');

// Defined store route

businessRoutes.route('/add').post(function (req, res) {
  let product = new Product({
    id:Math.floor(Math.random()*10000000000),
    title:req.body.data.product_name,
    company:req.body.data.manufacturer,
    price:req.body.data.product_price,
    info:req.body.data.product_info,
    img:req.body.data.product_image,
    inCart:false,
    count:0,
    total:0
  });
  product.save()
    .then(product => {
      res.status(200).json({product: 'product added successfully'});
      console.log("respone for add request");  
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
  Product.find(function(err, products){
  if(err){
    console.log(err);
  }
  else {
    res.json(products);
    console.log("response from get");
  }
});
});

// Define route to delete
// businessRoutes.route('/delete').delete(function (req, res) {
//   Product.deleteOne({_id:req.body.data},function(err){
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log("product deleted" );
//   }
// });
// });

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
  Product.findOneAndDelete({_id: req.params.id}, function(err, products){
      if(err) {res.json(err);}
      else{res.json('Successfully removed');}
  });
});




  module.exports = businessRoutes;



  



  
  