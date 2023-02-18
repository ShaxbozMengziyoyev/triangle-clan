const keyboardTexts = require('./keyboard-button')

module.exports = {
  start: [
    [
      keyboardTexts.start,
      keyboardTexts.admin
    ]
  ],

  registration: [
    [
      keyboardTexts.registration,
      keyboardTexts.masters,
      keyboardTexts.client
    ]
  ],
  menu: [
    [
      keyboardTexts.teacher,
      keyboardTexts.client,
    ]
  ]
}