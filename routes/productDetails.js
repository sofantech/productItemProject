var express = require('express');
var router = express.Router();
var axios=require('axios');
const ApiUrl='https://dummyjson.com/products';

/* GET product detail page. */
router.get('/:id', function(req, res, next) {
  axios.get(ApiUrl)
  .then((response)=>{
    let productsItem=[];
    let id=req.params.id;
    response.data.products.map((element)=>{
      if (element.id == id) {
        productsItem.push(element);
        
      }
      
    });
    console.log(productsItem[0].id);
    res.render('productDetails', { title: 'Express' ,item: productsItem[0]});

  }).catch((error)=>{
    console.log("error");

  });






  
});

module.exports = router;
