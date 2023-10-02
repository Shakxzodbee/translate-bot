const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '6583013922:AAEzL3ie2GgSZ-EF86Tj_JUwRZZS75CS5dU'
const translate = require('@vitalets/google-translate-api')
const bot = new TelegramBot(TOKEN,{polling:true}) 
let state = 0;

bot.on('message', (message) => {
    const chatId = message.chat.id;
    if (message.text == '/start') {
        bot.sendMessage(chatId , `Assalom aleykum <b> shahzodbe </b> botimizga xush kelibsiz. Uzbek tilida birorc bir so'z uyboring . Inglis tilida tarjima qilib beraman`,{
            parse_mode: 'HTML'
        })
        state = 1
    } else if (state == 1) {
        async function main() {
            let text = message.text
            let response =  translate(text, { from: 'uz', to: 'en' })
             bot.sendMessage(chatId , response.text)
        }
        main()
    }
})