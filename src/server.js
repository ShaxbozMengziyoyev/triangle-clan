const express = require('express')
const app = express()
const { PORT, bot } = require('./config')
const keyboards = require('./keyboard/keyboard')

bot.onText(/\/start/, msg => {
    bot.sendMessage(msg.chat.id, `Assalomu alaykum ${msg.from.first_name}, MAISHIY XIZMATLAR TIZIMLASHTIRILGAN BOTIGA XUSH KELIBSIZ `, {
        reply_markup: JSON.stringify({
            keyboard: [
                [
                    {
                        text: "Ro`yxatdan o`tish✍️"
                    },
                    {
                        text: "Admin"
                    }
                ]
            ],
            resize_keyboard: true
        })
    })
})

bot.on('message', msg => {
    const chatId = msg.chat.id
    if (msg.text == 'Ro`yxatdan o`tish✍️') {
        bot.sendMessage(chatId, 'Bo`limlardan birini tanlab ro`yxatdan o`ting!', {
            reply_markup: JSON.stringify({
                keyboard: keyboards.menu,
                resize_keyboard: true
            })
        })
    }

})

bot.on('message', msg => {
    const chatId = msg.chat.id
    if (msg.text == 'Admin') {
        bot.sendMessage(chatId, 'Bo`limlardan birini tanlab ro`yxatdan o`ting!', {
            reply_markup: JSON.stringify({
                keyboard: keyboards.registration,
                resize_keyboard: true
            })
        })
    }

})


app.listen(PORT, console.log(PORT))