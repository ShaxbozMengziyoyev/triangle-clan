const TelegramBot = require('node-telegram-bot-api')
const express = require('express')
const app = express()
const {PORT} = require('./config')
const bot = new TelegramBot('5824867290:AAHq24o6dO_J_rPFugyp4LqlK0YzmVj_GnI',{
    polling: true
})

bot.onText(/\/start/, msg => {
    bot.sendMessage(msg.chat.id, `Assalomu alaykum ${msg.from.first_name}, MAISHIY XIZMATLAR TIZIMLASHTIRILGAN BOTIGA XUSH KELIBSIZ `, {
        reply_markup: JSON.stringify({
            keyboard: [
                [
                    {
                        text: "Ro`yxatdan o`tish✍️"
                    }
                ]
                
            ],
            resize_keyboard: true
        })
    })

})

bot.on('message', msg => {
    const chatId = msg.chat.id

    if(msg.text == 'Ro`yxatdan o`tish✍️'){
        bot.sendMessage(chatId, 'Bo`limlardan birini tanlab ro`yxatdan o`ting!', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Usta 👨🏽‍🔧"

                        },

                        {
                            text: "Mijoz 👩‍💼"
                        }
                    ],
                    
                ],
                resize_keyboard: true
            })
            
        })
    }

})

app.listen(PORT, console.log(PORT))