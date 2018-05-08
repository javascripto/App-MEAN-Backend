const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance') // mongodb://user:pass@localhost:port/db_database

// Tradução mensagens de erro
mongoose.Error.messages.general.required = "O atributo '{PATH}' é orbigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O valor '{VALUE}' não é válido para o atributo '{PATH}'."