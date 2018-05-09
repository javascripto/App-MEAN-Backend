const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ 
  new: true, // reuisições PUT retornam o documento atualizado no lugar do documento anterior
  runValidators: true // Aplica as validações do schema às requisições PUT
})

// Intercepta resposta para uniformizar errors
BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle
  if (bundle.errors) {
    const errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  } else next()
}

function parseErrors(nodeRestfulErrors) {
  return Object.keys(nodeRestfulErrors).map(error => 
    nodeRestfulErrors[error].message)
  // const _ = require('lodash')
  // const errors = []
  // _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  // return errors
}

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, value) => {
    if (error) 
      res.status(500).json({ errors: [error] })
    else
      res.json({ value })
  })
}) // http://localhost:3003/api/billingCycles/count

module.exports = BillingCycle