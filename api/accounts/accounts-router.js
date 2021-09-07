const router = require('express').Router()

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC 
  try {
    res.json('get accont')
    
    

  }
  catch(err){
    next(err)

  }
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('get accont by id')

  }
  catch(err){
    next(err)
    
  }
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('post accont')

  }
  catch(err){
    next(err)
    
  }
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('update accont by id')

  }
  catch(err){
    next(err)
    
  }
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('delete accont by id')

  }
  catch(err){
    next(err)
    
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status (err.status || 500).json({
    message: err.message,

  }) 
})

module.exports = router;
