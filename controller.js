const model = require('./model')

const chocolatesController = (req, res, next) => {
  const chocolates = model.getAllChocolates()
  res.json(chocolates)
}

const chocolateByIdController = (req, res, next) => {
  const id = req.params.id
  const chocolate = model.getChocolateById(id)
  if (!chocolate) return next({ status: 404, message: `Could not find chcolate with id of ${id}.` })
  res.json(chocolate)
}

const chocolateCreaterController = (req, res, next) => {
  const { name, yumminess } = req.body
  if (!name || !yumminess) return next({ status: 400, message: `Required: chocolate name and chocolate yumminess (out of 10).`})
  const chocolate = model.createChocolate(name, yumminess)
  res.status(201).json(chocolate)
}

const chocholateUpdaterController = (req, res, next) => {
  const id = req.params.id
  const chocolate = model.getChocolateById(id)
  if (!chocolate) return next({ status: 400, message: `Could not find chocolate with id of ${id}.`})

  const { name, yumminess } = req.body
  if(!name || !yumminess) return next({ status: 400, message: `Required: chocolate name and chocolate yumminess (out of 10).`})

  const updatedChocolate = model.updateChocolate(id, name, yumminess)
  res.status(200).json(updatedChocolate)
}

const chocolateDeleterController = (req, res, next) => {

}

module.exports = {
  chocolatesController,
  chocolateByIdController,
  chocolateCreaterController,
  chocholateUpdaterController,
  chocolateDeleterController
}
