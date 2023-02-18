const TelegramBot = require('node-telegram-bot-api')
const PORT = process.env.PORT || 6000

const bot = new TelegramBot('6010691011:AAEWbjgmcLQ1DhoCYxrLsD8YU751JmnAXyY', {
    polling: true
})

const connection = {
    connectionString: 'postgres://postgres:omina27@localhost:5432/proart',
    connectionStringEl: 'postgres://akulzzlf:6ZsXJebZ5N6VOwy8ixRqpi8QrL91tfYe@rosie.db.elephantsql.com/akulzzlf'
}


module.exports = {
    PORT,
    connection,
    bot
}