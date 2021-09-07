exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('a')
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('b')
  next()
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  console.log(c)
  next()
}
