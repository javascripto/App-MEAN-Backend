const express = require('express')

module.exports = function(server) {
  // API  Routes
  const router = express.Router()
  server.use('/api', router)
  
  // Rotas da API
  const billingCycleService = require('../api/billingCycle/billingCycleService')
  billingCycleService.register(router, '/billingCycles')
  
  const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)
}

// Testando POST com postman na URL http://localhost:3003/api/billingCycles
// name:Janeiro/17
// month:1
// year:2017
// credits[0][name]:Salario empresa
// credits[0][value]:6500
// credits[1][name]:Salario professor
// credits[1][value]:2700
// debts[0][name]:Telefone
// debts[0][value]:89.56
// debts[0][status]:PAGO
// debts[1][name]:Condominio
// debts[1][value]:720
// debts[1][status]:AGENDADO

// Teste tambem com GET nas URL's
// http://localhost:3003/api/billingCycles/count
// http://localhost:3003/api/billingSummary