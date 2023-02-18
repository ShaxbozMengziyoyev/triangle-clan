const { bot } = require('./config')

bot.onText(/\/start/, msg => {
  bot.sendMessage(msg.chat.id, `Assalomu alaykum ${msg.from.first_name}, MAISHIY XIZMATLAR TIZIMLASHTIRILGAN BOTIGA XUSH KELIBSIZ `, {
    reply_markup: JSON.stringify({
      keyboard: [
        [
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
  if (msg.text == 'Admin') {
    bot.sendMessage(chatId, 'Bo`limlardan birini tanlab ro`yxatdan o`ting!', {
      reply_markup: JSON.stringify({
        keyboard: keyboards.registration,
        resize_keyboard: true
      })
    })
  }

})