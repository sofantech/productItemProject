var express = require('express');
var router = express.Router();
var axios=require('axios');
const ApiUrl='https://dummyjson.com/products';

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(ApiUrl)
  .then((response)=>{
    let productsItem=[];
    response.data.products.map((element)=>{
      productsItem.push(element);
    });
    res.render('index', { title: 'Express' ,item: productsItem});

  }).catch((error)=>{
    console.log("error");

  }); 
});



module.exports = router;
