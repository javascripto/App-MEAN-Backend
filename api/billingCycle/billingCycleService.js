const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ 
  new: true, // reuisições PUT retornam o documento atualizado no lugar do documento anterior
  runValidators: true // Aplica as validações do schema às requisições PUT
})

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, value) => {
    if (error) 
      res.status(500).json({ errors: [error] })
    else
      res.json({ value })
  })
}) // http://localhost:3003/api/billingCycles/count

module.exports = BillingCycle