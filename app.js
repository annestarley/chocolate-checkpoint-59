const express = require('express')
const app = express()
const port = process.env.PORT || 6001
const bodyParser = require('body-parser')
const morgan = require('morgan')
const uuid = require('uuid/v4')

const controller = require('./controller')
const model = require('./model')

app.disable('x-powered-by')
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.send('chocolate page')
})
app.get('/chocolates', controller.chocolatesController)
app.get('/chocolates/:id', controller.chocolateByIdController)
app.post('/chocolates', controller.chocolateCreaterController)
app.put('/chocolates/:id', controller.chocholateUpdaterController)
app.delete('/chocolates/:id', controller.chocolateDeleterController)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

const listener = () => `Listening on port ${port}!`
app.listen(port, listener)

module.exports = app
