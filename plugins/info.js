let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Abdi-Bot18
Script: @Nurotomo
Github: 
https://github.com/Abdi-Bot18/BotAbdi

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @abdi018
➥ YouTube: Abdi HH

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Tsel: 0812-3343-3839
║>Request? Wa.me/6281357302007
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

