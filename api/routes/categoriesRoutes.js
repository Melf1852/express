const express = require('express');
const router = express.Router();
const CategoryService = require('./../services/categoriesService')
const service = new CategoryService();

router.get('/',(req, res)=>{
  const categories = service.find();
  res.json(categories);
})

router.get('/:id',(req, res)=>{
  const {id} = req.params;
  const categories = service.findOne(id);
  res.json(categories);
})

module.exports = router;
