const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread.js");

// INDEX
breads.get("/", (req, res) => {
  Bread.find().then(foundBreads => {
      res.render("index", {
        breads: foundBreads,
        title: 'Index Page'
      });
  })  
});

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})

// EDIT
breads.get('/:indexArray/edit', (req, res) => {
  Bread.findById(req.params.indexArray)
    .then(foundBread => {
      res.render('edit', {
        bread: foundBread
      })
    })
})

// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
    .then(foundBread => {
      const bakedBy = foundBread.getBakedBy()
      console.log(bakedBy)
      res.render('show', {
        bread: foundBread
      })
    })
})

// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})

// DELETE
breads.delete('/:indexArray', (req, res) => {
  Bread.findOneAndDelete(req.params.indexArray)
  .then(deletedBread => {
    res.status(303).redirect('/breads')
  })
})

// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.arrayIndex, req.body, {new: true})
  .then(updatedBread => {
    console.log(updatedBread)
    res.redirect(`/breads/${req.params.arrayIndex}`)
  })
})



module.exports = breads;